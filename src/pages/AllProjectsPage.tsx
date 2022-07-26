import { Box } from '@mui/material';
import { Layout } from 'components/layout/Layout';
import AllProjects from 'components/project/allProjects/AllProjects';
import { useProject } from 'contexts/project-context';
import { getAllMyProjects } from 'dummyData/dummyData';
import { FunctionComponent, useEffect, useState } from 'react';

const AllProjectsPage: FunctionComponent = () => {
  const [loading, setLoading] = useState(true);
  const { setAllMyProjects } = useProject();
  useEffect(() => {
    const projects = getAllMyProjects();
    setAllMyProjects(projects);
    setLoading(false);
  }, [setAllMyProjects]);
  return (
    <Layout>
      <Box sx={{ mx: 4 }}>{!loading && <AllProjects />}</Box>
    </Layout>
  );
};

export default AllProjectsPage;
