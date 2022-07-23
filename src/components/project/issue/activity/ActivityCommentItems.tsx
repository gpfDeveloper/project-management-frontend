import { FunctionComponent } from 'react';
import { Box } from '@mui/material';
import ActivityCommentItem from './ActivityCommentItem';
import type { Comment } from 'types/types';

type Props = {
  items: Comment[];
};

const ActivityCommentItems: FunctionComponent<Props> = ({ items }) => {
  return (
    <Box>
      {items.map((item) => (
        <ActivityCommentItem key={item.id} item={item} />
      ))}
    </Box>
  );
};

export default ActivityCommentItems;
