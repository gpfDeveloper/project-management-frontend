import { Box } from '@mui/material';
import { Layout } from 'components/layout/Layout';
import AllProjects from 'components/project/allProjects/AllProjects';
import { FunctionComponent } from 'react';

const AllProjectsPage: FunctionComponent = () => {
  return (
    <Layout>
      <Box sx={{ mx: 4 }}>
        <AllProjects />
      </Box>
    </Layout>
  );
};

export default AllProjectsPage;
