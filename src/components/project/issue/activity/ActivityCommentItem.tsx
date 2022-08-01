import { FunctionComponent, useState, useRef, useEffect } from 'react';
import { Box, Button, Tooltip, Typography } from '@mui/material';
import type { Comment } from 'types/types';
import moment from 'moment';
import StringAvatar from 'components/shared/StringAvatar';
import { useAuth } from 'contexts/auth-context';
import TextEditor from 'components/shared/TextEditor';
import DeleteCommentDialog from './DeleteCommentDialog';

type Props = {
  item: Comment;
  onDelete: (id: string) => void;
};

const ActivityCommentItem: FunctionComponent<Props> = ({ item, onDelete }) => {
  const { user } = useAuth();
  const isCommentByMe = user?.email === item.createdBy.email;
  const isEdited = item.updatedAt !== item.createdAt;
  const [isEditing, setIsEditing] = useState(false);
  const [comment, setComment] = useState({ text: item.content });
  const commentInputRef = useRef<HTMLInputElement>();
  const commentDivRef = useRef<HTMLDivElement>();
  const onChangeComment = (content: string) => {
    setComment({ text: content });
  };
  const clickEditHandler = () => {
    setIsEditing(true);
  };
  useEffect(() => {
    if (isEditing) {
      commentDivRef!.current!.scrollIntoView();
      commentInputRef!.current!.focus();
    }
  }, [isEditing]);

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const closeDeleteDialogHandler = () => {
    setIsDeleteDialogOpen(false);
  };
  const deleteCommentHandler = () => {
    onDelete(item.id);
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, my: 4 }}>
      <DeleteCommentDialog
        open={isDeleteDialogOpen}
        onClose={closeDeleteDialogHandler}
        onDelete={deleteCommentHandler}
      />
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
        {!isEditing && (
          <>
            <div
              className="ql-editor"
              data-gramm="false"
              contentEditable={false}
              dangerouslySetInnerHTML={{ __html: item.content }}
            ></div>
            {isCommentByMe && (
              <Box
                sx={{
                  display: 'flex',
                  gap: 1,
                  color: 'text.secondary',
                  ml: -2,
                }}
              >
                <Button color="inherit" onClick={clickEditHandler}>
                  Edit
                </Button>
                <Button
                  color="inherit"
                  onClick={() => setIsDeleteDialogOpen(true)}
                >
                  Delete
                </Button>
              </Box>
            )}
          </>
        )}
        {isEditing && (
          <Box ref={commentDivRef}>
            <TextEditor
              ref={commentInputRef}
              placeholder="Add a description..."
              editorState={comment}
              onChange={onChangeComment}
            />
            <Box sx={{ mt: 1, display: 'flex', gap: 1, alignItems: 'center' }}>
              <Button variant="contained">Save</Button>
              <Button color="inherit" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ActivityCommentItem;
