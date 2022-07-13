import { MenuItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { FunctionComponent } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkIcon from '@mui/icons-material/Work';
import { useNavigate, useLocation } from 'react-router-dom';

const NavYourWork: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const clickBtnHandler = () => {
    navigate('/your-work');
  };
  const active = location.pathname === '/your-work';
  let content = (
    <>
      <Button
        onClick={clickBtnHandler}
        sx={{
          borderBottomWidth: 3,
          borderBottomStyle: 'solid',
          borderBottomColor: 'transparent',
          ...(active && {
            borderBottomColor: 'primary.main',
          }),
          borderRadius: 0,
          height: 64,
        }}
      >
        Your work
        <ExpandMoreIcon fontSize="small" />
      </Button>
    </>
  );

  return content;
};

export const YourWorkMenuItem: FunctionComponent = () => {
  let content = (
    <MenuItem>
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText>Your work</ListItemText>
    </MenuItem>
  );

  return content;
};
export default NavYourWork;
