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
import { deleteIssue } from 'dummyData/dummyData';

type Props = {
  open: boolean;
  onClose: () => void;
};
const DeleteIssueDialog: FunctionComponent<Props> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const {
    currentIssue,
    setCurrentIssue,
    issuesAssignedToMe,
    setIssuesAssignedToMe,
    issuesPerProject,
    setIssuesPerProject,
  } = useProject();
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const issueId = currentIssue!.id;
    deleteIssue(issueId);
    const projectId = currentIssue!.projectId;
    setCurrentIssue(undefined);
    const _issuesPerProject = issuesPerProject.filter(
      (item) => item.id !== issueId
    );
    setIssuesPerProject(_issuesPerProject);
    const _issuesAssignedToMe = issuesAssignedToMe.filter(
      (item) => item.id !== issueId
    );
    setIssuesAssignedToMe(_issuesAssignedToMe);
    navigate(`/projects/${projectId}/issues`);
    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <Box component="form" onSubmit={submitHandler}>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <GppMaybeIcon color="error" /> Delete the issue?
        </DialogTitle>
        <DialogContent>
          The issues will be deleted permanently and cannot be recover. Are you
          sure you want to delete the issue?
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

export default DeleteIssueDialog;
