import { Typography, Box } from '@mui/material';
import { ProjectLayout } from 'components/layout/ProjectLayout';
import { FunctionComponent } from 'react';

const IssueDetail: FunctionComponent = () => {
  return (
    <ProjectLayout>
      <Box>
        <Typography variant="body2" color="text.secondary" fontWeight={500}>
          Issue Detail
        </Typography>
      </Box>
    </ProjectLayout>
  );
};

export default IssueDetail;
