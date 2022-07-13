import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, useTheme } from '@mui/material';

const Logo: FunctionComponent = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  let bg = 'white';
  if (mode === 'dark') {
    bg = theme.palette.grey[900];
  }
  return (
    <Link to="/">
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            mr: 1.2,
            height: 24,
            width: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'primary.main',
            transform: 'rotate(45deg)',
          }}
        >
          <Box
            sx={{
              height: 10,
              width: 10,
              backgroundColor: bg,
              borderRadius: '100%',
            }}
          ></Box>
        </Box>
        <Typography
          variant="h5"
          noWrap
          sx={{
            mr: 2,
            fontFamily: 'Roboto Condensed',
            color: 'text.primary',
          }}
        >
          Serverless Agile
        </Typography>
      </Box>
    </Link>
  );
};

export default Logo;
