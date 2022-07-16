import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';

const Logo: FunctionComponent = () => {
  return (
    <Link to="/">
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <DashboardIcon color="primary" fontSize="large" />
        <Typography
          variant="h5"
          noWrap
          sx={{
            ml: 0.6,
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
