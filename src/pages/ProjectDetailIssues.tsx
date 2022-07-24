import { Typography, Box } from '@mui/material';
import { ProjectLayout } from 'components/layout/ProjectLayout';
import AllIssuesDataGrid from 'components/project/issue/AllIssuesDataGrid';
import { useProject } from 'contexts/project-context';
import { FunctionComponent, useEffect } from 'react';
import { sampleIssues } from 'dummyData/dummyData';

const ProjectDetailIssues: FunctionComponent = () => {
  const { setIssuesPerProject } = useProject();
  useEffect(() => {
    setIssuesPerProject(sampleIssues);
  }, [setIssuesPerProject]);
  return (
    <ProjectLayout>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="body2" color="text.secondary" fontWeight={500}>
          Projects / Sample Project
        </Typography>
        <Typography variant="h4">Issues</Typography>
        <AllIssuesDataGrid />
      </Box>
    </ProjectLayout>
  );
};

export default ProjectDetailIssues;
