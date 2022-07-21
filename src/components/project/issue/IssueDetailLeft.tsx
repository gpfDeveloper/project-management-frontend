import { Box, IconButton, Button, TextField, Typography } from '@mui/material';
import TextEditor from 'components/shared/TextEditor';
import { FunctionComponent, useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

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
  const [isFocus, setIsFocus] = useState(false);
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          fullWidth
          onFocus={() => setIsFocus(true)}
          onBlur={() => setTimeout(() => setIsFocus(false), 300)}
          onChange={onChangeSummary}
          multiline
          value={summary}
          label="Summary *"
          size="small"
          variant="filled"
        />
        {isFocus && (
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
        <Typography variant="body2" mb={0.6} fontWeight={500}>
          Description
        </Typography>
        <TextEditor editorState={description} onChange={onChangeDescription} />
        <Button sx={{ mt: 1 }} variant="contained" onClick={onSaveDescription}>
          Save
        </Button>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography sx={{ fontWeight: 700 }}>Activity</Typography>
      </Box>
    </Box>
  );
};

export default IssueDetailLeft;
