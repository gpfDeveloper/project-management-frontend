import { FunctionComponent } from 'react';
import type { ProjectIssueType } from 'types/types';
import { Tooltip } from '@mui/material';
import BugReportIcon from '@mui/icons-material/BugReport';
import TaskIcon from '@mui/icons-material/Task';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const IssueTypeIcon: FunctionComponent<{ issueType: ProjectIssueType }> = ({
  issueType,
}) => {
  let icon = <TaskIcon fontSize="small" color="info" />;
  if (issueType === 'Bug')
    icon = <BugReportIcon fontSize="small" color="error" />;
  if (issueType === 'Story')
    icon = <BookmarkIcon fontSize="small" color="success" />;
  return <Tooltip title={issueType}>{icon}</Tooltip>;
};

export default IssueTypeIcon;
