import { Box } from '@mui/material';
import { Layout } from 'components/layout/Layout';
import People from 'components/people/People';
import { FunctionComponent } from 'react';

const PeoplePage: FunctionComponent = () => {
  return (
    <Layout>
      <Box sx={{ mx: 4 }}>
        <People />
      </Box>
    </Layout>
  );
};

export default PeoplePage;
