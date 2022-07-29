import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
} from '@mui/material';
import { useProject } from 'contexts/project-context';
import React, { FunctionComponent, useState } from 'react';
import type { TeamMember } from 'types/types';

type Props = {
  open: boolean;
  onClose: () => void;
};
const AddPeopleDialog: FunctionComponent<Props> = ({ open, onClose }) => {
  const { setTeamMembers, teamMembers } = useProject();
  const [email, setEmail] = useState('');
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    let _email = email.trim().toLowerCase();
    setEmail('');
    if (!_email) {
      onClose();
      return;
    }
    for (const _member of teamMembers) {
      if (_member.email === _email) {
        onClose();
        return;
      }
    }
    const member: TeamMember = {
      name: _email.split('@')[0],
      email: _email,
      role: 'User',
      status: 'Invited',
    };
    setTeamMembers((pre) => [member, ...pre]);
    onClose();
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{ style: { width: 400 } }}
    >
      <Box component="form" onSubmit={submitHandler}>
        <DialogTitle>Invite people to your projects</DialogTitle>
        <DialogContent>
          <TextField
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            size="small"
          />
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            Invite
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default AddPeopleDialog;
