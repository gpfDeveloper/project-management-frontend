import { FunctionComponent, useState, useRef } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useAuth } from 'contexts/auth-context';
import StringAvatar from 'components/shared/StringAvatar';
import TextEditor from 'components/shared/TextEditor';

const ActivityComments: FunctionComponent = () => {
  const { user } = useAuth();
  const commentDivRef = useRef<HTMLDivElement>();
  const commentRef = useRef<HTMLInputElement>();
  const [focus, setFocus] = useState(false);
  const [comment, setComment] = useState({ text: '' });
  const focusHandler = () => {
    setFocus(true);
    setTimeout(() => commentDivRef!.current!.scrollIntoView(), 300);
    setTimeout(() => commentRef!.current!.focus(), 300);
  };
  const commentChangeHandler = (content: string) => {
    setComment({ text: content });
  };
  const saveCommentHandler = () => {
    setFocus(false);
    console.log(comment);
  };
  return (
    <Box sx={{ mt: 2 }}>
      {!focus && (
        <Box sx={{ display: 'flex', gap: 2 }}>
          <StringAvatar name={user?.username || 'Unassigned'} />
          <TextField
            size="small"
            onFocus={focusHandler}
            fullWidth
            variant="outlined"
            placeholder="Add a comment..."
          />
        </Box>
      )}
      {focus && (
        <Box ref={commentDivRef}>
          <TextEditor
            ref={commentRef}
            editorState={comment}
            onChange={commentChangeHandler}
          />
          <Box sx={{ mt: 1, display: 'flex', gap: 1, alignItems: 'center' }}>
            <Button variant="contained" onClick={saveCommentHandler}>
              Save
            </Button>
            <Button color="inherit" onClick={() => setFocus(false)}>
              Cancel
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ActivityComments;
