import { Typography, Box } from '@mui/material';
import { ProjectLayout } from 'components/layout/ProjectLayout';
import { FunctionComponent } from 'react';

const ProjectDetail: FunctionComponent = () => {
  return (
    <ProjectLayout>
      <Box>
        <Typography variant="body2" color="text.secondary" fontWeight={500}>
          Projects / Sample Project
        </Typography>
      </Box>
    </ProjectLayout>
  );
};

export default ProjectDetail;
