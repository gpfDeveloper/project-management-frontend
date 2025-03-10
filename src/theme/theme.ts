import { createTheme } from '@mui/material/styles';

export const getTheme = (mode: 'light' | 'dark') => {
  const theme = createTheme({
    palette: {
      mode,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 700,
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          h5: { fontWeight: 500 },
          h6: { fontSize: 18 },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: ({ theme }) => {
            const mode = theme.palette.mode;
            let ret = {};
            if (mode === 'light') {
              ret = { backgroundColor: theme.palette.grey['50'] };
            } else {
              ret = { backgroundColor: theme.palette.grey['900'] };
            }
            return ret;
          },
        },
      },
    },
  });
  return theme;
};
