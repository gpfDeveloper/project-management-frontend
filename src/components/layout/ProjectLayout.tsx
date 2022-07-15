import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import Nav from 'components/nav/Nav';
import { FunctionComponent, ReactNode } from 'react';
import { useThemeMode } from 'contexts/theme-mode-context';
import { getTheme } from 'theme/theme';
import ProjectDrawer from 'components/drawer/ProjectDrawer';

interface Props {
  children: ReactNode;
}

export const ProjectLayout: FunctionComponent<Props> = ({ children }) => {
  const { mode } = useThemeMode();
  const theme = getTheme(mode);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Nav />
      <Box sx={{ margin: '2rem auto', mt: 10, padding: { xs: 1 } }}>
        <ProjectDrawer children={children} />
      </Box>
    </ThemeProvider>
  );
};
