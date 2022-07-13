import {
  AppBar,
  Toolbar,
  Box,
  useTheme,
  useMediaQuery,
  Button,
  IconButton,
} from '@mui/material';
import Logo from './Logo';
import { FunctionComponent } from 'react';
import LightDarkToggler from './LightDarkToggler';
import { useThemeMode } from 'contexts/theme-mode-context';
import MyAvatar from './MyAvatar';
import { useAuth } from 'contexts/auth-context';
import NavYourWork from './NavYourWork';
import NavProjects from './NavProjects';
import NavPeople from './NavPeople';
import AddIcon from '@mui/icons-material/Add';

const Nav: FunctionComponent = () => {
  const { mode } = useThemeMode();
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down('md'));
  const backgroundColor = mode === 'light' ? 'white' : 'inherit';
  const { user } = useAuth();
  let addIconColor = 'white';
  if (mode === 'dark') {
    addIconColor = 'black';
  }
  return (
    <AppBar position="fixed" sx={{ backgroundColor }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Logo />
        {user && !isBelowMd && (
          <Box
            sx={{ mr: 'auto', display: 'flex', gap: 2, alignItems: 'center' }}
          >
            <NavYourWork />
            <NavProjects />
            <NavPeople />
            <Button
              variant="contained"
              sx={{ borderRadius: '4px', height: 40, ml: 4 }}
            >
              Create
            </Button>
          </Box>
        )}
        {user && isBelowMd && (
          <IconButton
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
        <Box sx={{ display: 'flex', gap: 1 }}>
          {!isBelowMd && <LightDarkToggler />}
          <MyAvatar />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Nav;
