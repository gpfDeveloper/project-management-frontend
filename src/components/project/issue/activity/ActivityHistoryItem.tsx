import { FunctionComponent } from 'react';
import { Box, Typography } from '@mui/material';
import type { History } from 'types/types';
import moment from 'moment';
import StringAvatar from 'components/shared/StringAvatar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type Props = {
  item: History;
};

const ActivityHistoryItem: FunctionComponent<Props> = ({ item }) => {
  let action = 'updated the';
  if (item.field === 'Issue') {
    action = 'created the';
  }
  if (item.field === 'Comment') {
    action = 'deleted a';
  }
  return (
    <Box sx={{ display: 'flex', gap: 2, my: 4 }}>
      <StringAvatar name={item.updatedBy.name} />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {item.updatedBy.name}
          </Typography>
          <Typography variant="body2">{action}</Typography>
          <Typography variant="body2" fontWeight={500}>
            {item.field}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {moment(item.createdAt).format('LLL')}
          </Typography>
        </Box>
        {item.from && item.to && (
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            <Typography variant="body2">{item.from}</Typography>
            <ArrowForwardIcon />
            <Typography variant="body2">{item.to}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ActivityHistoryItem;
