import moment from 'moment';
import { Box, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import IssuePrioritySelector from 'components/project/issue/IssuePrioritySelector';
import DateSelector from 'components/shared/DateSelector';
import PeopleSelector from 'components/shared/PeopleSelector';
import type {
  ProjectIssuePriority,
  People,
  ProjectIssueStatus,
} from 'types/project';
import IssueStatusSelector from 'components/project/issue/IssueStatusSelector';

type Props = {
  allPeople: People[];
  reporter: People | null;
  assignee: People | null;
  priority: ProjectIssuePriority;
  issueStatus: ProjectIssueStatus;
  dueDate: Date | null;
  createdAt: string;
  updatedAt: string;
  onChangeReporter: (
    event: React.SyntheticEvent<Element, Event>,
    value: People | null
  ) => void;
  onChangeAssignee: (
    event: React.SyntheticEvent<Element, Event>,
    value: People | null
  ) => void;
  onChangePriority: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeIssueStatus: (status: ProjectIssueStatus) => void;
  onChangeDueDate: (date: Date | null) => void;
};

const IssueDetailRight: FunctionComponent<Props> = ({
  allPeople,
  reporter,
  assignee,
  priority,
  issueStatus,
  dueDate,
  createdAt,
  updatedAt,
  onChangeAssignee,
  onChangePriority,
  onChangeReporter,
  onChangeIssueStatus,
  onChangeDueDate,
}) => {
  return (
    <Box
      sx={{
        flex: 1,
        mb: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <IssueStatusSelector
          issueStatus={issueStatus}
          onSelect={onChangeIssueStatus}
        />
        <PeopleSelector
          people={reporter}
          onSelect={onChangeReporter}
          options={allPeople}
          label="Reporter"
        />
        <PeopleSelector
          people={assignee}
          onSelect={onChangeAssignee}
          options={allPeople}
          label="Assignee"
        />
        <IssuePrioritySelector
          issuePriority={priority}
          onSelect={onChangePriority}
        />
        <DateSelector
          label="Due date"
          date={dueDate}
          onChange={onChangeDueDate}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="body2" color="text.secondary">
          Created at {moment(createdAt).format('LLL')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Updated at {moment(updatedAt).format('LLL')}
        </Typography>
      </Box>
    </Box>
  );
};

export default IssueDetailRight;
