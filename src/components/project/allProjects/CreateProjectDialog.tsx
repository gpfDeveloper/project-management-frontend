import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
  MenuItem,
} from '@mui/material';
import { useAuth } from 'contexts/auth-context';
import { useProject } from 'contexts/project-context';
import React, { FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectProps, ProjectType } from 'types/types';
import { v4 as uuid } from 'uuid';

const ProjectTypes: ProjectType[] = ['Software', 'Business'];

type Props = {
  open: boolean;
  onClose: () => void;
};
const CreateProjectDialog: FunctionComponent<Props> = ({ open, onClose }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState<ProjectType>('Software');
  const { user } = useAuth();
  const { setAllProjects } = useProject();
  const navigate = useNavigate();
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const now = new Date().toISOString();
    const projectId = uuid();
    const project: ProjectProps = {
      id: projectId,
      name: name,
      type: type,
      avatar: 'Rocket',
      owner: user!,
      createdAt: now,
      updatedAt: now,
      lead: user!,
      isPrivate: false,
    };
    setAllProjects((pre) => [project, ...pre]);
    onClose();
    navigate(`/projects/${projectId}/board`);
  };
  const [isTouch, setIsTouch] = useState(false);
  const changeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTouch(true);
    setName(e.target.value);
  };
  const error = isTouch && !name.trim();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{ style: { width: 800 } }}
    >
      <Box component="form" onSubmit={submitHandler}>
        <DialogTitle>Create project</DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <TextField
              value={name}
              label="Project name *"
              onChange={changeNameHandler}
              size="small"
              variant="filled"
              placeholder="Project name *"
              inputProps={{ maxLength: 80 }}
              error={error}
              {...(error && {
                helperText: 'You must specify a project name.',
              })}
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
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            type="submit"
            disabled={Boolean(!name.trim())}
          >
            Create
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default CreateProjectDialog;
