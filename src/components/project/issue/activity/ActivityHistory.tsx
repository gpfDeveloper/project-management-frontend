import { FunctionComponent } from 'react';
import { Box } from '@mui/material';
import { queryHistory } from 'dummyData/dummyData';
import { useProject } from 'contexts/project-context';
import ActivityHistoryItem from './ActivityHistoryItem';

const ActivityHistory: FunctionComponent = () => {
  const { currentIssue } = useProject();
  const history = queryHistory(currentIssue!.id).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return (
    <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 6 }}>
      {history.map((item) => (
        <ActivityHistoryItem key={item.id} item={item} />
      ))}
    </Box>
  );
};

export default ActivityHistory;
