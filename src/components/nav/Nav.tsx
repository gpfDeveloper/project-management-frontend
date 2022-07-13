import { AppBar, Toolbar, Box, useTheme, useMediaQuery } from '@mui/material';
import Logo from './Logo';
import { FunctionComponent } from 'react';
import LightDarkToggler from './LightDarkToggler';
import MyAvatar from './MyAvatar';
import { useAuth } from 'contexts/auth-context';
import NavYourWork from './NavYourWork';
import NavProjects from './NavProjects';
import NavPeople from './NavPeople';
import CreateIssue from 'components/project/issue/CreateIssue';

const Nav: FunctionComponent = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down('md'));
  const { user } = useAuth();
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'background.paper' }}>
      <Toolbar sx={{ display: 'flex' }}>
        <Logo />
        {user && !isBelowMd && (
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <NavYourWork />
            <NavProjects />
            <NavPeople />
          </Box>
        )}
        {user && <CreateIssue />}

        <Box sx={{ display: 'flex', gap: 1, ml: 'auto' }}>
          {!isBelowMd && <LightDarkToggler />}
          <MyAvatar />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Nav;
