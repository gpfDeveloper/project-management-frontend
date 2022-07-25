import { Box, Tooltip, Button, IconButton } from '@mui/material';
import { FunctionComponent } from 'react';
import CampaignIcon from '@mui/icons-material/Campaign';
import LinkIcon from '@mui/icons-material/Link';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ProjectBreadcrumbs from 'components/shared/ProjectBreadcrumbs';

const IssueDetailHeader: FunctionComponent = () => {
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
          <IconButton>
            <DeleteForeverIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default IssueDetailHeader;
