import { AppBar, Toolbar, Container, Box } from '@mui/material';
import Logo from './Logo';
import { FunctionComponent } from 'react';
import LightDarkToggler from './LightDarkToggler';
import { useThemeMode } from 'contexts/theme-mode-context';

const Nav: FunctionComponent = () => {
  const { mode } = useThemeMode();
  const backgroundColor = mode === 'light' ? 'white' : 'inherit';
  return (
    <AppBar position="fixed" sx={{ backgroundColor }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Logo />
          <Box>
            <LightDarkToggler />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
