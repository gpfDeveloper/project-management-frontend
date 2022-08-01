import { FunctionComponent } from 'react';
import { Box } from '@mui/material';
import ActivityCommentItem from './ActivityCommentItem';
import type { Comment } from 'types/types';

type Props = {
  items: Comment[];
  onDeleteComment: (id: string) => void;
  onEditComment: (id: string, content: string) => void;
};

const ActivityCommentItems: FunctionComponent<Props> = ({
  items,
  onDeleteComment,
  onEditComment,
}) => {
  return (
    <Box>
      {items.map((item) => (
        <ActivityCommentItem
          key={item.id}
          item={item}
          onDelete={onDeleteComment}
          onEdit={onEditComment}
        />
      ))}
    </Box>
  );
};

export default ActivityCommentItems;
