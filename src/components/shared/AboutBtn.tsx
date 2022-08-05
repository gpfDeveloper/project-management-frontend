import { Fab, Box } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AboutMenu from './AboutMenu';

const AboutBtn: FunctionComponent = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openMenuHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const closeMenuHandler = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ position: 'fixed', bottom: 40, right: 40, zIndex: 100 }}>
        <Fab color="secondary" onClick={openMenuHandler}>
          <QuestionMarkIcon />
        </Fab>
      </Box>
      <AboutMenu anchorEl={anchorEl} onClose={closeMenuHandler} />
    </>
  );
};
export default AboutBtn;
