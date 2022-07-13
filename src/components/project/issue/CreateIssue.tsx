import { FunctionComponent, useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Modal,
  useTheme,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const CreateIssue: FunctionComponent = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down('md'));
  const mode = theme.palette.mode;
  let addIconColor = 'white';
  if (mode === 'dark') {
    addIconColor = 'black';
  }
  const [open, setOpen] = useState(false);
  const openHandler = () => {
    setOpen(true);
  };
  const closeHandler = () => {
    setOpen(false);
  };
  return (
    <>
      {!isBelowMd && (
        <Button
          onClick={openHandler}
          variant="contained"
          sx={{ borderRadius: '4px', height: 40, ml: 2, mr: 'auto' }}
        >
          Create
        </Button>
      )}
      {isBelowMd && (
        <IconButton
          onClick={openHandler}
          sx={{
            borderRadius: '4px',
            backgroundColor: 'primary.main',
            color: addIconColor,
            '&:hover': {
              backgroundColor: 'primary.main',
              color: addIconColor,
            },
          }}
        >
          <AddIcon />
        </IconButton>
      )}
      <Modal open={open} onClose={closeHandler}>
        <Box
          sx={{
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default CreateIssue;
