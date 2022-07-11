import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import Nav from 'components/nav/Nav';
import { FunctionComponent, ReactNode } from 'react';
import { useThemeMode } from 'contexts/theme-mode-context';
import { getTheme } from 'theme/theme';

interface Props {
  children: ReactNode;
}

export const Layout: FunctionComponent<Props> = ({ children }) => {
  const { mode } = useThemeMode();
  const theme = getTheme(mode);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ margin: '2rem auto', mt: 10, padding: { xs: 1 } }}>
        <Nav />
        {children}
      </Box>
    </ThemeProvider>
  );
};
