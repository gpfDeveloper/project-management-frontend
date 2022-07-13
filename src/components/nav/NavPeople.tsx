import { MenuItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { FunctionComponent } from 'react';
import WorkIcon from '@mui/icons-material/Work';
import { useLocation, useNavigate } from 'react-router-dom';

const NavPeople: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const clickBtnHandler = () => {
    navigate('/people');
  };
  const active = location.pathname === '/people';
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
        People
      </Button>
    </>
  );

  return content;
};

export const PeopleMenuItem: FunctionComponent = () => {
  let content = (
    <MenuItem>
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText>People</ListItemText>
    </MenuItem>
  );

  return content;
};
export default NavPeople;
