import { FunctionComponent } from 'react';
import { Box } from '@mui/material';
import IssueDetailHeader from './IssueDetailHeader';
import IssueDetail from './IssueDetail';

const IssueDetailWrapper: FunctionComponent = () => {
  return (
    <Box>
      <IssueDetailHeader />
      <Box sx={{ mr: 2, display: 'flex', gap: 4, mt: 4 }}>
        <IssueDetail />
      </Box>
    </Box>
  );
};

export default IssueDetailWrapper;
