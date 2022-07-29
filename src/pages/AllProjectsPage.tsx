import { Box } from '@mui/material';
import { Layout } from 'components/layout/Layout';
import AllProjects from 'components/project/allProjects/AllProjects';
import { useProject } from 'contexts/project-context';
import { getAllMyProjects } from 'dummyData/dummyData';
import { FunctionComponent, useEffect, useState } from 'react';

const AllProjectsPage: FunctionComponent = () => {
  const [loading, setLoading] = useState(true);
  const { setAllProjects } = useProject();
  useEffect(() => {
    const projects = getAllMyProjects();
    setAllProjects(projects);
    setLoading(false);
  }, [setAllProjects]);
  return (
    <Layout>
      <Box sx={{ mx: 4 }}>{!loading && <AllProjects />}</Box>
    </Layout>
  );
};

export default AllProjectsPage;
