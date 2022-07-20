import { Box, TextField, Typography } from '@mui/material';
import TextEditor from 'components/shared/TextEditor';
import { FunctionComponent } from 'react';

type Props = {
  summary: string;
  onChangeSummary: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description: { text: string };
  onChangeDescription: (content: string) => void;
};

const IssueDetailLeft: FunctionComponent<Props> = ({
  summary,
  onChangeSummary,
  description,
  onChangeDescription,
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 2 }}>
      <TextField
        onChange={onChangeSummary}
        multiline
        value={summary}
        label="Summary *"
        size="small"
        variant="filled"
      />
      <Box>
        <Typography variant="body2" mb={0.6} fontWeight={500}>
          Description
        </Typography>
        <TextEditor editorState={description} onChange={onChangeDescription} />
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography sx={{ fontWeight: 700 }}>Activity</Typography>
      </Box>
    </Box>
  );
};

export default IssueDetailLeft;
