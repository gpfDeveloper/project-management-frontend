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
import { ProjectIssueType } from 'types/types';
import BugReportIcon from '@mui/icons-material/BugReport';
import TaskIcon from '@mui/icons-material/Task';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CampaignIcon from '@mui/icons-material/Campaign';
import LinkIcon from '@mui/icons-material/Link';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CloseIcon from '@mui/icons-material/Close';
import { useProject } from 'contexts/project-context';

type Props = {
  scrollTarget: Node | Window | undefined;
  onClose: () => void;
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

const EditIssueModalHeader: FunctionComponent<Props> = ({
  scrollTarget,
  onClose,
}) => {
  const { currentIssue } = useProject();
  const isScroll = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: scrollTarget,
  });
  return (
    <AppBar
      elevation={isScroll ? 1 : 0}
      sx={{
        position: 'sticky',
        bgcolor: 'background.paper',
        color: 'text.primary',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IssueIcon issueType={currentIssue!.type} />
          <Typography variant="body2" color="text.secondary">
            {currentIssue!.id}
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
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default EditIssueModalHeader;
