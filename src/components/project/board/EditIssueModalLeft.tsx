import { Box, TextField, Typography } from '@mui/material';
import TextEditor from 'components/shared/TextEditor';
import { FunctionComponent } from 'react';

type Props = {
  summary: string;
  onChangeSummary: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description: string;
};

const EditIssueModalLeft: FunctionComponent<Props> = ({
  summary,
  onChangeSummary,
  description,
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 2 }}>
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
        <TextEditor />
      </Box>
    </Box>
  );
};

export default EditIssueModalLeft;
