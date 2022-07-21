import {
  AppBar,
  Toolbar,
  Box,
  useScrollTrigger,
  Tooltip,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import { FunctionComponent } from 'react';
import { ProjectIssueType } from 'types/project';
import BugReportIcon from '@mui/icons-material/BugReport';
import TaskIcon from '@mui/icons-material/Task';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CampaignIcon from '@mui/icons-material/Campaign';
import LinkIcon from '@mui/icons-material/Link';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

type Props = {
  issueId: string;
  projectId: string;
  issueType: ProjectIssueType;
};

type IssueIconProps = {
  issueType: ProjectIssueType;
};

const IssueIcon: FunctionComponent<IssueIconProps> = ({ issueType }) => {
  let icon = <TaskIcon fontSize="small" color="info" />;
  if (issueType === 'Bug')
    icon = <BugReportIcon fontSize="small" color="error" />;
  if (issueType === 'Story')
    icon = <BookmarkIcon fontSize="small" color="success" />;
  return <Tooltip title={issueType}>{icon}</Tooltip>;
};

const IssueDetailHeader: FunctionComponent<Props> = ({
  issueId,
  issueType,
  projectId,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 64,
        zIndex: 3,
        bgcolor: 'background.paper',
        color: 'text.primary',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IssueIcon issueType={issueType} />
        <Typography variant="body2" color="text.secondary">
          {issueId}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 1, color: 'text.secondary' }}>
        <Button color="inherit">
          <CampaignIcon sx={{ mr: 0.2, transform: 'rotate(-15deg)' }} />
          Give feedback
        </Button>
        <Button color="inherit">
          <LinkIcon sx={{ mr: 0.2 }} />
          Copy link
        </Button>
        <Tooltip title="Delete this issue">
          <IconButton>
            <DeleteForeverIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default IssueDetailHeader;
