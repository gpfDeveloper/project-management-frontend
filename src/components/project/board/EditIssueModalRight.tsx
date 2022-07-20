import { Box, TextField, MenuItem } from '@mui/material';
import { FunctionComponent } from 'react';
import IssuePrioritySelector from 'components/shared/IssuePrioritySelector';
import DateSelector from 'components/shared/DateSelector';
import PeopleSelector from 'components/shared/PeopleSelector';
import type {
  ProjectIssuePriority,
  People,
  ProjectIssueStatus,
} from 'types/project';
import IssueStatusSelector from 'components/shared/IssueStatusSelector';

type Props = {
  allPeople: People[];
  reporter: People | null;
  assignee: People | null;
  priority: ProjectIssuePriority;
  issueStatus: ProjectIssueStatus;
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
};

const EditIssueModalRight: FunctionComponent<Props> = ({
  allPeople,
  reporter,
  assignee,
  priority,
  issueStatus,
  onChangeAssignee,
  onChangePriority,
  onChangeReporter,
  onChangeIssueStatus,
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
      <DateSelector />
    </Box>
  );
};

export default EditIssueModalRight;
