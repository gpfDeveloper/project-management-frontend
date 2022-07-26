import { useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { ProjectLayout } from 'components/layout/ProjectLayout';
import AllIssuesDataGrid from 'components/project/issue/AllIssuesDataGrid';
import { useProject } from 'contexts/project-context';
import { FunctionComponent, useEffect } from 'react';
import { getProject, queryIssues } from 'dummyData/dummyData';
import ProjectBreadcrumbs from 'components/shared/ProjectBreadcrumbs';

const ProjectDetailIssues: FunctionComponent = () => {
  const { setIssuesPerProject, setCurrentProject } = useProject();
  const { projectId } = useParams();
  useEffect(() => {
    if (projectId) {
      const project = getProject(projectId);
      setCurrentProject(project);
      const issues = queryIssues(projectId);
      setIssuesPerProject(issues);
    }
  }, [setIssuesPerProject, projectId, setCurrentProject]);
  return (
    <ProjectLayout>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <ProjectBreadcrumbs />
        <Typography variant="h5">Issues</Typography>
        <AllIssuesDataGrid />
      </Box>
    </ProjectLayout>
  );
};

export default ProjectDetailIssues;
