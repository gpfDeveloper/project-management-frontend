import { Box } from '@mui/material';
import { Layout } from 'components/layout/Layout';
import YourWork from 'components/project/yourWork/YourWork';
import { FunctionComponent } from 'react';

const YourWorkPage: FunctionComponent = () => {
  return (
    <Layout>
      <Box sx={{ mx: 4 }}>
        <YourWork />
      </Box>
    </Layout>
  );
};

export default YourWorkPage;
