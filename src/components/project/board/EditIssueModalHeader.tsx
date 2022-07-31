import {
  AppBar,
  Toolbar,
  Box,
  useScrollTrigger,
  Tooltip,
  Button,
  IconButton,
} from '@mui/material';
import { FunctionComponent, useState } from 'react';
import CampaignIcon from '@mui/icons-material/Campaign';
import LinkIcon from '@mui/icons-material/Link';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CloseIcon from '@mui/icons-material/Close';
import ProjectBreadcrumbs from 'components/shared/ProjectBreadcrumbs';
import DeleteIssueDialog from '../issue/DeleteIssueDialog';

type Props = {
  scrollTarget: Node | Window | undefined;
  onClose: () => void;
};

const EditIssueModalHeader: FunctionComponent<Props> = ({
  scrollTarget,
  onClose,
}) => {
  const isScroll = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: scrollTarget,
  });
  const [deleteIssueDialogOpen, setDeleteIssueDialogOpen] = useState(false);
  const closeDeleteIssueDialogHandler = () => {
    setDeleteIssueDialogOpen(false);
  };
  return (
    <AppBar
      elevation={isScroll ? 1 : 0}
      sx={{
        position: 'sticky',
        bgcolor: 'background.paper',
        color: 'text.primary',
      }}
    >
      <DeleteIssueDialog
        open={deleteIssueDialogOpen}
        onClose={closeDeleteIssueDialogHandler}
      />
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <ProjectBreadcrumbs />
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
            <IconButton onClick={() => setDeleteIssueDialogOpen(true)}>
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
