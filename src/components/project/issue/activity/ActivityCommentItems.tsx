import { FunctionComponent } from 'react';
import { Box } from '@mui/material';
import ActivityCommentItem from './ActivityCommentItem';
import type { Comment } from 'types/types';

type Props = {
  items: Comment[];
  onDeleteComment: (id: string) => void;
};

const ActivityCommentItems: FunctionComponent<Props> = ({
  items,
  onDeleteComment,
}) => {
  return (
    <Box>
      {items.map((item) => (
        <ActivityCommentItem
          key={item.id}
          item={item}
          onDelete={onDeleteComment}
        />
      ))}
    </Box>
  );
};

export default ActivityCommentItems;
