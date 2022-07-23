import { FunctionComponent } from 'react';
import { Box, Button, Tooltip, Typography } from '@mui/material';
import type { Comment } from 'types/types';
import moment from 'moment';
import StringAvatar from 'components/shared/StringAvatar';
import { useAuth } from 'contexts/auth-context';

type Props = {
  item: Comment;
};

const ActivityCommentItem: FunctionComponent<Props> = ({ item }) => {
  const { user } = useAuth();
  const isCommentByMe = user?.email === item.createdBy.email;
  const isEdited = item.updatedAt !== item.createdAt;
  return (
    <Box sx={{ display: 'flex', gap: 2, my: 4 }}>
      <StringAvatar name={item.createdBy.name} />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {item.createdBy.name}
          </Typography>
          <Typography variant="body2">
            {moment(item.createdAt).format('LLL')}
          </Typography>
          {isEdited && (
            <Tooltip title={moment(item.updatedAt).format('LLL')}>
              <Typography variant="body2" color="text.secondary">
                Edited
              </Typography>
            </Tooltip>
          )}
        </Box>
        <div
          className="ql-editor"
          data-gramm="false"
          contentEditable={false}
          dangerouslySetInnerHTML={{ __html: item.content }}
        ></div>
        {isCommentByMe && (
          <Box
            sx={{ display: 'flex', gap: 1, color: 'text.secondary', ml: -2 }}
          >
            <Button color="inherit">Edit</Button>
            <Button color="inherit">Delete</Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ActivityCommentItem;
