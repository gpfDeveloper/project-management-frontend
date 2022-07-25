import { Typography, Box } from '@mui/material';
import { ProjectLayout } from 'components/layout/ProjectLayout';
import AllIssuesDataGrid from 'components/project/issue/AllIssuesDataGrid';
import { useProject } from 'contexts/project-context';
import { FunctionComponent, useEffect } from 'react';
import { sampleIssues } from 'dummyData/dummyData';
import ProjectBreadcrumbs from 'components/shared/ProjectBreadcrumbs';

const ProjectDetailIssues: FunctionComponent = () => {
  const { setIssuesPerProject } = useProject();
  useEffect(() => {
    setIssuesPerProject(sampleIssues);
  }, [setIssuesPerProject]);
  return (
    <ProjectLayout>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <ProjectBreadcrumbs />
        <Typography variant="h4">Issues</Typography>
        <AllIssuesDataGrid />
      </Box>
    </ProjectLayout>
  );
};

export default ProjectDetailIssues;
