import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const Logo: FunctionComponent = () => {
  return (
    <Link to="/">
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            mr: 1.2,
            height: 20,
            width: 20,
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
              backgroundColor: 'background.paper',
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
