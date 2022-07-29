import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
} from '@mui/material';
import React, { FunctionComponent, useState } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  onAdd: (email: string) => void;
};
const AddPeopleDialog: FunctionComponent<Props> = ({
  open,
  onClose,
  onAdd,
}) => {
  const [email, setEmail] = useState('');
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(email);
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
