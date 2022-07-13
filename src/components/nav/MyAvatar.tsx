import {
  IconButton,
  Box,
  Typography,
  Avatar,
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
import { YourWorkMenuItem } from './NavYourWork';

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

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
  const commonMobileMenuItems = <LightDarkTogglerMenuItem />;
  const authMobileMenuItems = <YourWorkMenuItem />;
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
        {isBelowMd && (
          <>
            {commonMobileMenuItems}
            <Divider />
          </>
        )}
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
          <Avatar {...stringAvatar('Peng Fei')} />
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
          {isBelowMd && (
            <>
              {commonMobileMenuItems}
              <Divider />
              {authMobileMenuItems}
              <Divider />
            </>
          )}
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
