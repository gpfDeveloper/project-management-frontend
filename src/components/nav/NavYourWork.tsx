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
          ...(active && {
            borderBottomWidth: 3,
            borderBottomColor: 'primary.main',
            borderBottomStyle: 'solid',
          }),

          borderRadius: 0,
          height: 64,
        }}
        endIcon={<ExpandMoreIcon />}
      >
        Your work
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
