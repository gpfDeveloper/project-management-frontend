import { FunctionComponent } from 'react';
import { Box } from '@mui/material';
import IssueDetailHeader from './IssueDetailHeader';
import IssueDetail from './IssueDetail';
import { useProject } from 'contexts/project-context';

const IssueDetailWrapper: FunctionComponent = () => {
  const { currentIssue: issue } = useProject();
  return (
    <Box>
      <IssueDetailHeader
        issueId={issue!.id}
        projectId={issue!.projectId}
        issueType={issue!.type}
      />
      <Box sx={{ mr: 2, display: 'flex', gap: 4, mt: 4 }}>
        <IssueDetail />
      </Box>
    </Box>
  );
};

export default IssueDetailWrapper;
