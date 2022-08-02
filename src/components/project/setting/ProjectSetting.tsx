import {
  Box,
  MenuItem,
  TextField,
  Typography,
  Checkbox,
  Button,
  Tooltip,
  IconButton,
  Menu,
} from '@mui/material';
import PeopleSelector from 'components/shared/PeopleSelector';
import TextEditor from 'components/shared/TextEditor';
import { useProject } from 'contexts/project-context';
import React, { FunctionComponent, useState } from 'react';
import type {
  TeamMember,
  ProjectAvatarName,
  ProjectType,
  ProjectProps,
} from 'types/types';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ProjectAvatar from './ProjectAvatar';
import ProjectAvatarDialog from './ProjectAvatarDialog';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { updateProject } from 'dummyData/dummyData';
import DeleteProjectDialog from './DeleteProjectDialog';

const ProjectTypes: ProjectType[] = ['Software', 'Business'];

const ProjectSetting: FunctionComponent = () => {
  const {
    currentProject: project,
    setCurrentProject,
    teamMembers,
  } = useProject();
  const [name, setName] = useState(project!.name);
  const [url, setUrl] = useState(project!.URL);
  const [type, setType] = useState(project!.type);
  const [avatar, setAvatar] = useState(project!.avatar);
  const [description, setDescription] = useState({
    text: project!.description || '',
  });
  const changeDescriptionHandler = (content: string) => {
    setDescription({ text: content });
  };
  const [lead, setLead] = useState(project!.lead);
  const selectLeadHandler = (
    event: React.SyntheticEvent<Element, Event>,
    value: TeamMember | null
  ) => {
    setLead(value!);
  };
  const [isPrivate, setIsPrivate] = useState(project!.isPrivate);
  const changeIsPrivateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPrivate(e.target.checked);
  };

  const hasError = !name.trim() || !lead;

  const saveHandler = () => {
    const _project = {
      ...project,
      name,
      url,
      type,
      description: description.text,
      lead,
      isPrivate,
      avatar,
    } as ProjectProps;
    setCurrentProject(_project);
    updateProject(_project);
  };

  const [avatarDialogOpen, setAvatarDialogOpen] = useState(false);
  const closeAvatarDialogHandler = () => {
    setAvatarDialogOpen(false);
  };
  const selectAvatarHanlder = (name: ProjectAvatarName) => {
    setAvatar(name);
    setAvatarDialogOpen(false);
  };

  const [deleteProjectMenuAnchor, setDeleteProjectMenuAnchor] =
    useState<null | HTMLElement>(null);
  const deleteProjectMenuOpen = Boolean(deleteProjectMenuAnchor);
  const deleteProjectMenuOpenHandler = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setDeleteProjectMenuAnchor(e.currentTarget);
  };
  const deleteProjectMenuCloseHandler = () => {
    setDeleteProjectMenuAnchor(null);
  };
  const deleteProjectHandler = () => {
    setDeleteProjectMenuAnchor(null);
    setDeleteProjectDialogOpen(true);
  };

  const [deleteProjectDialogOpen, setDeleteProjectDialogOpen] = useState(false);
  const closeDeleteProjectDialogHandler = () => {
    setDeleteProjectDialogOpen(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <DeleteProjectDialog
        open={deleteProjectDialogOpen}
        onClose={closeDeleteProjectDialogHandler}
        projectId={project!.id}
      />
      <ProjectAvatarDialog
        open={avatarDialogOpen}
        onClose={closeAvatarDialogHandler}
        onSelect={selectAvatarHanlder}
      />
      <Box sx={{ alignSelf: 'flex-end', mt: -6, mb: 6 }}>
        <IconButton onClick={deleteProjectMenuOpenHandler}>
          <MoreHorizIcon />
        </IconButton>
        <Menu
          anchorEl={deleteProjectMenuAnchor}
          open={deleteProjectMenuOpen}
          onClose={deleteProjectMenuCloseHandler}
        >
          <MenuItem onClick={deleteProjectHandler}>Delete Project</MenuItem>
        </Menu>
      </Box>
      <Box
        sx={{ width: 600, display: 'flex', flexDirection: 'column', gap: 4 }}
      >
        <Box
          sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: 300 }}
        >
          <TextField
            value={name}
            label="name *"
            onChange={(e) => setName(e.target.value)}
            size="small"
            variant="filled"
            placeholder="name *"
            inputProps={{ maxLength: 80 }}
            error={!name.trim()}
            {...(!name.trim() && {
              helperText: 'You must specify a project name.',
            })}
          />
          <TextField
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            label="URL"
            size="small"
            variant="filled"
            placeholder="URL"
            inputProps={{ maxLength: 255 }}
          />
          <TextField
            value={type}
            onChange={(e) => setType(e.target.value as ProjectType)}
            size="small"
            select
            variant="filled"
            label="Project type"
          >
            {ProjectTypes.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: 13,
              mb: 0.2,
            }}
          >
            Avatar *
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <ProjectAvatar name={avatar} size="large" />
            <Button onClick={() => setAvatarDialogOpen(true)}>
              select icon
            </Button>
          </Box>
        </Box>
        <Box>
          <TextEditor
            placeholder="description"
            editorState={description}
            onChange={changeDescriptionHandler}
          />
        </Box>
        <Box sx={{ width: 300 }}>
          <PeopleSelector
            label="Project lead *"
            people={lead}
            error={!lead}
            options={teamMembers.filter(
              (people) =>
                people.name !== 'Unassigned' && people.status === 'Active'
            )}
            onSelect={selectLeadHandler}
          />
        </Box>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          <Typography sx={{ fontWeight: 500, color: 'text.secondary' }}>
            Private
          </Typography>
          <Checkbox checked={isPrivate} onChange={changeIsPrivateHandler} />
          <Tooltip title={'If checked, only members can access the project.'}>
            <InfoOutlinedIcon fontSize="small" />
          </Tooltip>
        </Box>
        <Box>
          <Button disabled={hasError} variant="contained" onClick={saveHandler}>
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectSetting;
