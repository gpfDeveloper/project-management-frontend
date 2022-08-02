import {
  IconButton,
  Box,
  Typography,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import { FunctionComponent, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { LightDarkTogglerMenuItem } from './LightDarkToggler';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from 'contexts/auth-context';
import StringAvatar from 'components/shared/StringAvatar';
import { YourWorkMenuItem } from './NavYourWork';
import { ProjectsMenuItem } from './NavProjects';
import { PeopleMenuItem } from './NavPeople';

const MyAvatar: FunctionComponent = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { user, login, logout } = useAuth();
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down('md'));

  const openMenuHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const closeMenuHandler = () => {
    setAnchorEl(null);
  };
  const loginHandler = () => {
    login('user', '123');
    setAnchorEl(null);
  };
  const logoutHandler = () => {
    logout();
    setAnchorEl(null);
  };

  const commonMobileMenuItems = [<LightDarkTogglerMenuItem key={11} />];
  const authMobileMenuItems = [
    <YourWorkMenuItem key={21} />,
    <ProjectsMenuItem key={22} />,
    <PeopleMenuItem key={23} />,
  ];
  let content = (
    <Box>
      <IconButton
        sx={{ display: 'flex', gap: 0.4, borderRadius: '4px' }}
        onClick={openMenuHandler}
      >
        <AccountCircleIcon />
        {!isBelowMd && <Typography>My account</Typography>}
        <ExpandMoreIcon />
      </IconButton>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={closeMenuHandler}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        {isBelowMd && [commonMobileMenuItems, <Divider key={20} />]}
        <MenuItem onClick={loginHandler}>
          <ListItemIcon>
            <LoginIcon />
          </ListItemIcon>
          <ListItemText>Log in</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
  if (user) {
    content = (
      <Box>
        <IconButton onClick={openMenuHandler}>
          <StringAvatar name={user.name} />
        </IconButton>
        <Menu
          open={open}
          anchorEl={anchorEl}
          onClose={closeMenuHandler}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          {isBelowMd && [
            commonMobileMenuItems,
            <Divider key={20} />,
            authMobileMenuItems,
            <Divider key={30} />,
          ]}
          <MenuItem onClick={logoutHandler}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText>Log out</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
    );
  }
  return content;
};
export default MyAvatar;
