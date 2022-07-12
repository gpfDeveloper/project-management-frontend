import {
  IconButton,
  Box,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { FunctionComponent, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
  const [isLogin, setIsLogin] = useState(false);
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
    setIsLogin(true);
    setAnchorEl(null);
  };
  const logoutHandler = () => {
    setIsLogin(false);
    setAnchorEl(null);
  };
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
        <MenuItem onClick={loginHandler}>Log in</MenuItem>
      </Menu>
    </Box>
  );
  if (isLogin) {
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
          <MenuItem onClick={logoutHandler}>Log out</MenuItem>
        </Menu>
      </Box>
    );
  }
  return content;
};
export default MyAvatar;
