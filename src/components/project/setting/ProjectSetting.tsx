import {
  Box,
  MenuItem,
  TextField,
  Typography,
  Checkbox,
  Button,
  Tooltip,
} from '@mui/material';
import PeopleSelector from 'components/shared/PeopleSelector';
import TextEditor from 'components/shared/TextEditor';
import { useProject } from 'contexts/project-context';
import { samplePeople } from 'dummyData/dummyData';
import React, { FunctionComponent, useState } from 'react';
import type { People, ProjectType } from 'types/types';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const ProjectTypes: ProjectType[] = ['Software', 'Business'];

const ProjectSetting: FunctionComponent = () => {
  const { currentProject: project } = useProject();
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
    value: People | null
  ) => {
    setLead(value!);
  };
  const [isPrivate, setIsPrivate] = useState(project!.isPrivate);
  const changeIsPrivateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPrivate(e.target.checked);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
            options={samplePeople.filter(
              (people) => people.name !== 'Unassigned'
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
          <Button variant="contained">Save</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectSetting;
