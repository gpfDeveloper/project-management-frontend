import { FunctionComponent } from 'react';
import { Box, Chip, Typography } from '@mui/material';
import type {
  History,
  TeamMember,
  ProjectIssuePriority,
  ProjectIssueStatus,
} from 'types/types';
import moment from 'moment';
import StringAvatar from 'components/shared/StringAvatar';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import EastIcon from '@mui/icons-material/East';

const MyArrowForwardIcon = () => (
  <Box sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center' }}>
    <EastIcon fontSize="small" color="inherit" />
  </Box>
);

const StatusHistory: FunctionComponent<{
  from: ProjectIssueStatus;
  to: ProjectIssueStatus;
}> = ({ from, to }) => {
  const getColor = (status: ProjectIssueStatus) => {
    let color: 'default' | 'primary' | 'success' = 'default';
    if (status === 'IN PROGRESS') color = 'primary';
    if (status === 'DONE') color = 'success';
    return color;
  };
  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <Chip size="small" color={getColor(from)} label={from} />
      <MyArrowForwardIcon />
      <Chip size="small" label={to} color={getColor(to)} />
    </Box>
  );
};

const PriorityHistory: FunctionComponent<{
  from: ProjectIssuePriority;
  to: ProjectIssuePriority;
}> = ({ from, to }) => {
  const getIcon = (priority: ProjectIssuePriority) => {
    let icon = <DragHandleIcon color="warning" />;
    switch (priority) {
      case 'Highest':
        icon = <KeyboardDoubleArrowUpIcon color="error" />;
        break;
      case 'High':
        icon = <KeyboardArrowUpIcon color="error" />;
        break;
      case 'Low':
        icon = <KeyboardArrowDownIcon color="info" />;
        break;
      case 'Lowest':
        icon = <KeyboardDoubleArrowDownIcon color="info" />;
        break;
    }
    return icon;
  };
  const iconFrom = getIcon(from);
  const iconTo = getIcon(to);
  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
        {iconFrom}
        <Typography variant="body2" fontWeight={500}>
          {from}
        </Typography>
      </Box>
      <MyArrowForwardIcon />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
        {iconTo}
        <Typography variant="body2" fontWeight={500}>
          {to}
        </Typography>
      </Box>
    </Box>
  );
};

const PeopleHistory: FunctionComponent<{
  from: TeamMember;
  to: TeamMember;
}> = ({ from, to }) => {
  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <StringAvatar height={30} width={30} name={from.name} />
        <Typography variant="body2" fontWeight={500}>
          {from.name}
        </Typography>
      </Box>
      <MyArrowForwardIcon />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <StringAvatar height={30} width={30} name={to.name} />
        <Typography variant="body2" fontWeight={500}>
          {to.name}
        </Typography>
      </Box>
    </Box>
  );
};

const DueHistory: FunctionComponent<{
  from: string | undefined;
  to: string | undefined;
}> = ({ from, to }) => {
  const _from = from ? moment(from).format('LL') : 'None';
  const _to = to ? moment(to).format('LL') : 'None';
  const getColor = (due: string) => {
    if (due === 'None') return 'text.disabled';
    return 'text.primary';
  };
  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
      <Typography variant="body2" fontWeight={500} color={getColor(_from)}>
        {_from}
      </Typography>
      <MyArrowForwardIcon />
      <Typography variant="body2" fontWeight={500} color={getColor(_to)}>
        {_to}
      </Typography>
    </Box>
  );
};

type Props = {
  item: History;
};

const ActivityHistoryItem: FunctionComponent<Props> = ({ item }) => {
  let action = 'updated the';
  if (item.field === 'Issue') {
    action = 'created the';
  }
  if (item.field === 'Comment') {
    action = 'deleted a';
  }
  let content;
  if (item.field === 'Status') {
    content = (
      <StatusHistory
        from={item.from as ProjectIssueStatus}
        to={item.to as ProjectIssueStatus}
      />
    );
  }
  switch (item.field) {
    case 'Status':
      content = (
        <StatusHistory
          from={item.from as ProjectIssueStatus}
          to={item.to as ProjectIssueStatus}
        />
      );
      break;
    case 'Due':
      content = <DueHistory from={item.from} to={item.to} />;
      break;
    case 'Priority':
      content = (
        <PriorityHistory
          from={item.from as ProjectIssuePriority}
          to={item.to as ProjectIssuePriority}
        />
      );
      break;
    case 'Assignee':
    case 'Reporter':
      const pFrom = JSON.parse(item.from!) as TeamMember;
      const pTo = JSON.parse(item.to!) as TeamMember;
      content = <PeopleHistory from={pFrom} to={pTo} />;
      break;
  }
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <StringAvatar name={item.updatedBy.name} />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {item.updatedBy.name}
          </Typography>
          <Typography variant="body2">{action}</Typography>
          <Typography variant="body2" fontWeight={500}>
            {item.field}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {moment(item.createdAt).format('LLL')}
          </Typography>
        </Box>
        {content}
      </Box>
    </Box>
  );
};

export default ActivityHistoryItem;
