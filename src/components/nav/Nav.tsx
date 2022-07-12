import { AppBar, Toolbar, Box, useTheme, useMediaQuery } from '@mui/material';
import Logo from './Logo';
import { FunctionComponent } from 'react';
import LightDarkToggler from './LightDarkToggler';
import { useThemeMode } from 'contexts/theme-mode-context';
import MyAvatar from './MyAvatar';

const Nav: FunctionComponent = () => {
  const { mode } = useThemeMode();
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down('md'));
  const backgroundColor = mode === 'light' ? 'white' : 'inherit';
  return (
    <AppBar position="fixed" sx={{ backgroundColor }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Logo />
        <Box sx={{ display: 'flex', gap: 1 }}>
          {!isBelowMd && <LightDarkToggler />}
          <MyAvatar />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Nav;
