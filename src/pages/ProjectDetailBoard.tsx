import { Typography, Box } from '@mui/material';
import { ProjectLayout } from 'components/layout/ProjectLayout';
import ProjectBoard from 'components/project/board/ProjectBoard';
import { FunctionComponent } from 'react';

const ProjectDetailBoard: FunctionComponent = () => {
  return (
    <ProjectLayout>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="body2" color="text.secondary" fontWeight={500}>
          Projects / Sample Project
        </Typography>
        <Typography variant="h4">Board</Typography>
        <ProjectBoard />
      </Box>
    </ProjectLayout>
  );
};

export default ProjectDetailBoard;
