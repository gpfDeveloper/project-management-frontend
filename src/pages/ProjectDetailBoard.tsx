import { Typography, Box } from '@mui/material';
import { ProjectLayout } from 'components/layout/ProjectLayout';
import ProjectBoards from 'components/project/board/ProjectBoards';
import { FunctionComponent } from 'react';

const ProjectDetailBoard: FunctionComponent = () => {
  return (
    <ProjectLayout>
      <Box>
        <Typography variant="body2" color="text.secondary" fontWeight={500}>
          Projects / Sample Project
        </Typography>
        <ProjectBoards />
      </Box>
    </ProjectLayout>
  );
};

export default ProjectDetailBoard;
