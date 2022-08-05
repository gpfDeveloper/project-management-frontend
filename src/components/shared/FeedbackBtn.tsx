import { Button } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import AboutMenu from './AboutMenu';
import CampaignIcon from '@mui/icons-material/Campaign';

const FeedbackBtn: FunctionComponent = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openMenuHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const closeMenuHandler = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button color="inherit" onClick={openMenuHandler}>
        <CampaignIcon sx={{ mr: 0.2, transform: 'rotate(-15deg)' }} />
        Give feedback
      </Button>
      <AboutMenu anchorEl={anchorEl} onClose={closeMenuHandler} />
    </>
  );
};
export default FeedbackBtn;
