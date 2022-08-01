import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
} from '@mui/material';
import React, { FunctionComponent } from 'react';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';

type Props = {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
};
const DeleteCommentDialog: FunctionComponent<Props> = ({
  open,
  onClose,
  onDelete,
}) => {
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    onDelete();
    onClose();
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <Box component="form" onSubmit={submitHandler}>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <GppMaybeIcon color="error" /> Delete the comment?
        </DialogTitle>
        <DialogContent>
          The comment will be deleted permanently and cannot be recover. Are you
          sure you want to delete the comment?
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

export default DeleteCommentDialog;
