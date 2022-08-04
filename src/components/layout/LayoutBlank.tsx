import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { FunctionComponent, ReactNode } from 'react';
import { useThemeMode } from 'contexts/theme-mode-context';
import { getTheme } from 'theme/theme';

interface Props {
  children: ReactNode;
}

export const LayoutBlank: FunctionComponent<Props> = ({ children }) => {
  const { mode } = useThemeMode();
  const theme = getTheme(mode);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ margin: '2rem auto', padding: { xs: 1 } }}>{children}</Box>
    </ThemeProvider>
  );
};
