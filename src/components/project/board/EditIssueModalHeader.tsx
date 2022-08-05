import {
  AppBar,
  Toolbar,
  Box,
  useScrollTrigger,
  Tooltip,
  IconButton,
} from '@mui/material';
import { FunctionComponent, useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CloseIcon from '@mui/icons-material/Close';
import ProjectBreadcrumbs from 'components/shared/ProjectBreadcrumbs';
import DeleteIssueDialog from '../issue/DeleteIssueDialog';
import CopyLinkBtn from 'components/shared/CopyLinkBtn';
import FeedbackBtn from 'components/shared/FeedbackBtn';

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
        isFromBoard={true}
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
          <FeedbackBtn />
          <CopyLinkBtn />
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
