import { MenuItem, Button, Menu, Typography, Divider } from '@mui/material';
import React, { FunctionComponent, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useLocation, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const NavPeople: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const active = location.pathname === '/people';

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const openMenuHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const closeMenuHandler = () => {
    setAnchorEl(null);
  };

  const viewPeopleHandler = () => {
    setAnchorEl(null);
    navigate('/people');
  };

  let content = (
    <>
      <Button
        onClick={openMenuHandler}
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
        <ExpandMoreIcon fontSize="small" />
      </Button>
      <Menu open={open} onClose={closeMenuHandler} anchorEl={anchorEl}>
        {[
          <MenuItem key={2}>
            <AddIcon />
            <Typography variant="body2" sx={{ ml: 1 }}>
              Invite a teammate
            </Typography>
          </MenuItem>,
          <Divider key={3} />,
          <MenuItem key={4} onClick={viewPeopleHandler}>
            <PeopleAltIcon />
            <Typography variant="body2" sx={{ ml: 1 }}>
              People in your team
            </Typography>
          </MenuItem>,
        ]}
      </Menu>
    </>
  );

  return content;
};

export default NavPeople;
