import { Box, Chip, Typography } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import ActivityComments from './ActivityComments';
import ActivityHistory from './ActivityHistory';

type Option = 'Comments' | 'History';

const IssueDetailActivity: FunctionComponent = () => {
  const [option, setOption] = useState<Option>('Comments');
  const variantComments = option === 'Comments' ? 'filled' : 'outlined';
  const variantHistory = option === 'History' ? 'filled' : 'outlined';
  return (
    <Box>
      <Typography sx={{ fontWeight: 500 }}>Activity</Typography>
      <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
        <Chip
          variant={variantComments}
          label="Comments"
          onClick={() => setOption('Comments')}
        />
        <Chip
          variant={variantHistory}
          label="History"
          onClick={() => setOption('History')}
        />
      </Box>
      {option === 'Comments' && <ActivityComments />}
      {option === 'History' && <ActivityHistory />}
    </Box>
  );
};

export default IssueDetailActivity;
