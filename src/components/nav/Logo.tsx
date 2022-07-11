import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const Logo: FunctionComponent = () => {
  return (
    <Link to="/">
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            mr: 1,
            height: 30,
            width: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src="Logo.svg" alt="logo" />
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
