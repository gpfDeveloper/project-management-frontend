import {
  Box,
  IconButton,
  Button,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import TextEditor from 'components/shared/TextEditor';
import { FunctionComponent, useState, useRef } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import IssueDetailActivity from './activity/IssueDetailActivity';

type Props = {
  summary: string;
  onChangeSummary: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSaveSummary: () => void;
  description: { text: string };
  onChangeDescription: (content: string) => void;
  onSaveDescription: () => void;
};

const IssueDetailLeft: FunctionComponent<Props> = ({
  summary,
  onChangeSummary,
  onSaveSummary,
  description,
  onChangeDescription,
  onSaveDescription,
}) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const grey =
    mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900];
  const [isFocusSummary, setIsFocusSummary] = useState(false);
  const [isFocusDescription, setIsFocusDescription] = useState(false);
  const saveDescriptionHandler = () => {
    setIsFocusDescription(false);
    onSaveDescription();
  };
  const descriptionInputRef = useRef<HTMLInputElement>();
  const descriptionFocusHandler = () => {
    setIsFocusDescription(true);
    setTimeout(() => descriptionInputRef!.current!.focus(), 300);
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          fullWidth
          onFocus={() => setIsFocusSummary(true)}
          onBlur={() => setTimeout(() => setIsFocusSummary(false), 300)}
          onChange={onChangeSummary}
          multiline
          value={summary}
          label="Summary *"
          size="small"
          variant="filled"
        />
        {isFocusSummary && (
          <Box sx={{ alignSelf: 'flex-end', display: 'flex', gap: 1 }}>
            <IconButton
              sx={{ boxShadow: 1, borderRadius: '4px' }}
              size="small"
              onClick={onSaveSummary}
            >
              <CheckIcon />
            </IconButton>
            <IconButton sx={{ boxShadow: 1, borderRadius: '4px' }} size="small">
              <ClearIcon />
            </IconButton>
          </Box>
        )}
      </Box>
      <Box>
        <Typography mb={0.6} fontWeight={500}>
          Description
        </Typography>
        {!isFocusDescription && (
          <Box
            onClick={descriptionFocusHandler}
            sx={{
              cursor: 'text',
              padding: 2,
              borderRadius: '4px',
              '&:hover': { backgroundColor: grey },
            }}
          >
            <div
              className="ql-editor"
              data-gramm="false"
              contentEditable={false}
              dangerouslySetInnerHTML={{ __html: description.text }}
            ></div>
          </Box>
        )}
        {isFocusDescription && (
          <Box>
            <TextEditor
              ref={descriptionInputRef}
              editorState={description}
              onChange={onChangeDescription}
            />
            <Box sx={{ mt: 1, display: 'flex', gap: 1, alignItems: 'center' }}>
              <Button variant="contained" onClick={saveDescriptionHandler}>
                Save
              </Button>
              <Button
                color="inherit"
                onClick={() => setIsFocusDescription(false)}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        )}
      </Box>
      <IssueDetailActivity />
    </Box>
  );
};

export default IssueDetailLeft;
