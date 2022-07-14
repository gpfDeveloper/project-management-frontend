import { FunctionComponent, useState } from 'react';
import { Button, useTheme, useMediaQuery, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CreateIssueModal from './CreateIssueModal';

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
          sx={{ height: 40, ml: 2, mr: 'auto' }}
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
      <CreateIssueModal open={open} onClose={closeHandler} />
    </>
  );
};

export default CreateIssue;
