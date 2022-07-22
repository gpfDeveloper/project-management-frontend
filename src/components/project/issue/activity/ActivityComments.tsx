import { FunctionComponent, useState, useRef, useEffect } from 'react';
import { Box, TextField, Button, Typography, useTheme } from '@mui/material';
import { useAuth } from 'contexts/auth-context';
import StringAvatar from 'components/shared/StringAvatar';
import TextEditor from 'components/shared/TextEditor';

const ActivityComments: FunctionComponent = () => {
  const { user } = useAuth();
  const theme = useTheme();
  const mode = theme.palette.mode;
  const grey =
    mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[700];
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

  useEffect(() => {
    const keydownHandler = (e: KeyboardEvent) => {
      console.log(e.key);
      if (!focus && e.key.toLowerCase() === 'm') {
        focusHandler();
      }
      if (focus && e.key === 'Escape') {
        setFocus(false);
      }
    };
    document.addEventListener('keydown', keydownHandler);
    return () => {
      document.removeEventListener('keydown', keydownHandler);
    };
  }, [focus]);
  return (
    <Box sx={{ mt: 2 }}>
      {!focus && (
        <Box>
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
          <Box
            sx={{
              ml: 6.7,
              mt: 1,
              gap: 0.3,
              display: 'flex',
              '& > p': { fontSize: 13, color: 'text.secondary' },
            }}
          >
            <Typography fontWeight={700}>Pro tip:</Typography>
            <Typography>press</Typography>
            <Typography
              fontWeight={700}
              sx={{
                color: 'text.primary',
                py: 0.2,
                px: 0.6,
                mx: 0.4,
                backgroundColor: grey,
              }}
            >
              M
            </Typography>
            <Typography>to comment</Typography>
          </Box>
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
