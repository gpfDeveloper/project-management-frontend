import { Box, TextField, MenuItem } from '@mui/material';
import { FunctionComponent } from 'react';
import IssuePrioritySelector from 'components/project/issue/IssuePrioritySelector';
import DateSelector from 'components/shared/DateSelector';
import { ProjectIssuePriority } from 'types/project';

const people = [
  { value: 'pengfei', label: 'Pengfei Gao' },
  { value: 'user1', label: 'User 1' },
  { value: 'user2', label: 'User 2' },
];

type Props = {
  reporter: string;
  assignee: string;
  issuePriority: ProjectIssuePriority;
  onChangeReporter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeAssignee: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePriority: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const EditIssueModalRight: FunctionComponent<Props> = ({
  reporter,
  assignee,
  issuePriority,
  onChangeAssignee,
  onChangePriority,
  onChangeReporter,
}) => {
  return (
    <Box
      sx={{
        flex: 1,
        mb: 4,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <TextField
        fullWidth
        select
        size="small"
        label="Reporter"
        value={reporter}
        variant="filled"
        onChange={onChangeReporter}
      >
        {people.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        fullWidth
        select
        size="small"
        label="Assignee"
        value={assignee}
        variant="filled"
        onChange={onChangeAssignee}
      >
        {people.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <IssuePrioritySelector
        issuePriority={issuePriority}
        onSelect={onChangePriority}
      />
      <DateSelector />
    </Box>
  );
};

export default EditIssueModalRight;
