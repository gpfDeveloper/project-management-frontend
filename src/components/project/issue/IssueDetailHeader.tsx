import { Box, Tooltip, Button, IconButton } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import CampaignIcon from '@mui/icons-material/Campaign';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ProjectBreadcrumbs from 'components/shared/ProjectBreadcrumbs';
import DeleteIssueDialog from './DeleteIssueDialog';
import CopyLinkBtn from 'components/shared/CopyLinkBtn';

const IssueDetailHeader: FunctionComponent = () => {
  const [deleteIssueDialogOpen, setDeleteIssueDialogOpen] = useState(false);
  const closeDeleteIssueDialogHandler = () => {
    setDeleteIssueDialogOpen(false);
  };
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
        alignItems: 'center',
      }}
    >
      <DeleteIssueDialog
        open={deleteIssueDialogOpen}
        onClose={closeDeleteIssueDialogHandler}
      />
      <ProjectBreadcrumbs />
      <Box sx={{ display: 'flex', gap: 1, color: 'text.secondary' }}>
        <Button color="inherit">
          <CampaignIcon sx={{ mr: 0.2, transform: 'rotate(-15deg)' }} />
          Give feedback
        </Button>
        <CopyLinkBtn />
        <Tooltip title="Delete this issue">
          <IconButton onClick={() => setDeleteIssueDialogOpen(true)}>
            <DeleteForeverIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default IssueDetailHeader;
