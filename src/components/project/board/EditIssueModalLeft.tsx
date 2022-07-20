import { Box, TextField, Typography } from '@mui/material';
import TextEditor from 'components/shared/TextEditor';
import { FunctionComponent } from 'react';

type Props = {
  summary: string;
  onChangeSummary: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description: { text: string };
  onChangeDescription: (content: string) => void;
};

const EditIssueModalLeft: FunctionComponent<Props> = ({
  summary,
  onChangeSummary,
  description,
  onChangeDescription,
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 2 }}>
      <TextField
        onChange={onChangeSummary}
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
    </Box>
  );
};

export default EditIssueModalLeft;
