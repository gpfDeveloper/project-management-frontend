import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
} from '@mui/material';
import { useProject } from 'contexts/project-context';
import React, { FunctionComponent } from 'react';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import { useNavigate } from 'react-router-dom';
import { deleteProject } from 'dummyData/dummyData';

type Props = {
  open: boolean;
  onClose: () => void;
  projectId: string;
};
const DeleteProjectDialog: FunctionComponent<Props> = ({
  open,
  onClose,
  projectId,
}) => {
  const navigate = useNavigate();
  const { setAllProjects, setCurrentProject, allProjects } = useProject();
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    deleteProject(projectId);
    setCurrentProject(undefined);
    const _allProjects = allProjects.filter((item) => item.id !== projectId);
    setAllProjects(_allProjects);
    navigate(`/projects`);
    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <Box component="form" onSubmit={submitHandler}>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <GppMaybeIcon color="error" /> Delete the project?
        </DialogTitle>
        <DialogContent>
          The project along with its issues will be deleted permanently and
          cannot be recover. Are you sure you want to delete the project?
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" color="error" type="submit">
            Delete
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default DeleteProjectDialog;
