import moment from 'moment';
import { Box, ListItemButton, Tooltip, Typography } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import type { ProjectIssueProps } from 'types/types';
import { Draggable } from 'react-beautiful-dnd';
import BugReportIcon from '@mui/icons-material/BugReport';
import TaskIcon from '@mui/icons-material/Task';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import type { ProjectIssueType, ProjectIssuePriority } from 'types/types';
import StringAvatar from 'components/shared/StringAvatar';
import EditIssueModal from './EditIssueModal';

type IssueProps = {
  issue: ProjectIssueProps;
  index: number;
};

const IssueType: FunctionComponent<{ issueType: ProjectIssueType }> = ({
  issueType,
}) => {
  let icon = <TaskIcon fontSize="small" color="info" />;
  if (issueType === 'Bug')
    icon = <BugReportIcon fontSize="small" color="error" />;
  if (issueType === 'Story')
    icon = <BookmarkIcon fontSize="small" color="success" />;
  return <Tooltip title={issueType}>{icon}</Tooltip>;
};

const IssuePriority: FunctionComponent<{
  issuePriority: ProjectIssuePriority;
}> = ({ issuePriority }) => {
  let icon = <DragHandleIcon color="warning" />;
  switch (issuePriority) {
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
  return <Tooltip title={`${issuePriority} Priority`}>{icon}</Tooltip>;
};

const ProjectBoardTask: FunctionComponent<IssueProps> = ({ issue, index }) => {
  const [open, setOpen] = useState(false);
  const closeModalHandler = () => {
    setOpen(false);
  };
  const openModalHandler = () => {
    setOpen(true);
  };
  const dueDate = issue.dueAt
    ? moment(issue.dueAt).format('DD[/]MMM[/]YY')
    : null;
  return (
    <>
      <EditIssueModal
        issueId={issue.id}
        open={open}
        onClose={closeModalHandler}
      />
      <ListItemButton onClick={openModalHandler} sx={{ margin: 0, padding: 0 }}>
        <Draggable draggableId={issue.id} index={index}>
          {(provided) => (
            <Box
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              sx={{
                p: 2,
                bgcolor: 'background.paper',
                '&:hover': {
                  bgcolor: 'initial',
                  boxShadow: 2,
                },
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                boxShadow: 1,
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {issue.summary}
              </Typography>
              {dueDate && (
                <Tooltip title={`Due date: ${dueDate}`}>
                  <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>
                    {dueDate}
                  </Typography>
                </Tooltip>
              )}
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', gap: 0.2, alignItems: 'center' }}>
                  <IssueType issueType={issue.type} />
                  <IssuePriority issuePriority={issue.priority} />
                </Box>
                <Box>
                  {issue.assignee.name !== 'Unassigned' && (
                    <Tooltip title={`Assignee ${issue.assignee}`}>
                      <Box>
                        <StringAvatar
                          name={issue.assignee.name}
                          width={32}
                          height={32}
                        />
                      </Box>
                    </Tooltip>
                  )}
                </Box>
              </Box>
            </Box>
          )}
        </Draggable>
      </ListItemButton>
    </>
  );
};

export default ProjectBoardTask;
