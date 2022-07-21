import { FunctionComponent } from 'react';
import { Box } from '@mui/material';
import { sampleIssues } from 'dummyData/dummyData';
import IssueDetailHeader from './IssueDetailHeader';
import IssueDetail from './IssueDetail';

type Props = {
  issueId: string;
};

const IssueDetailWrapper: FunctionComponent<Props> = ({ issueId }) => {
  const issue = sampleIssues.find((item) => item.id === issueId)!;

  return (
    <Box>
      <IssueDetailHeader
        issueId={issue.id}
        projectId={issue.projectId}
        issueType={issue.type}
      />
      <Box sx={{ mr: 2, display: 'flex', gap: 4, mt: 4 }}>
        <IssueDetail issue={issue} />
      </Box>
    </Box>
  );
};

export default IssueDetailWrapper;
