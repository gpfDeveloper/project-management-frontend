import { Typography, Box } from '@mui/material';
import { ProjectLayout } from 'components/layout/ProjectLayout';
import ProjectBoard from 'components/project/board/ProjectBoard';
import { useProject } from 'contexts/project-context';
import { FunctionComponent, useEffect, useState } from 'react';
import { sampleIssues } from 'dummyData/dummyData';

const ProjectDetailBoard: FunctionComponent = () => {
  const { setAllIssues, allIssues } = useProject();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setAllIssues(sampleIssues);
    setLoading(false);
  }, [setAllIssues]);
  return (
    <ProjectLayout>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="body2" color="text.secondary" fontWeight={500}>
          Projects / Sample Project
        </Typography>
        <Typography variant="h4">Kanban Board</Typography>
        {!loading && <ProjectBoard issues={allIssues} />}
      </Box>
    </ProjectLayout>
  );
};

export default ProjectDetailBoard;
