import { Typography, Box } from '@mui/material';
import { ProjectLayout } from 'components/layout/ProjectLayout';
import ProjectBoard from 'components/project/board/ProjectBoard';
import { useProject } from 'contexts/project-context';
import { FunctionComponent, useEffect, useState } from 'react';
import { queryIssues, getProject } from 'dummyData/dummyData';
import { useParams } from 'react-router-dom';
import ProjectBreadcrumbs from 'components/shared/ProjectBreadcrumbs';

const ProjectDetailBoard: FunctionComponent = () => {
  const { setIssuesPerProject, setCurrentProject } = useProject();
  const [loading, setLoading] = useState(true);
  const { projectId } = useParams();
  useEffect(() => {
    if (projectId) {
      const project = getProject(projectId);
      setCurrentProject(project);
      const issues = queryIssues(projectId);
      setIssuesPerProject(issues);
      setLoading(false);
    }
  }, [setIssuesPerProject, projectId, setCurrentProject]);
  return (
    <ProjectLayout>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <ProjectBreadcrumbs />
        <Typography variant="h5">Kanban Board</Typography>
        {!loading && <ProjectBoard />}
      </Box>
    </ProjectLayout>
  );
};

export default ProjectDetailBoard;
