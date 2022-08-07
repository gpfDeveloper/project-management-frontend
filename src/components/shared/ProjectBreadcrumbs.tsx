import { useLocation } from 'react-router-dom';
import { Typography, Breadcrumbs, Tooltip, Box } from '@mui/material';
import { useProject } from 'contexts/project-context';
import { FunctionComponent } from 'react';
import BugReportIcon from '@mui/icons-material/BugReport';
import TaskIcon from '@mui/icons-material/Task';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import type { ProjectIssueType } from 'types/types';
import LinkRouter from './LinkRouter';

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

type PageType = 'Board' | 'Issue' | 'Settings';

const ProjectBreadcrumbs: FunctionComponent = () => {
  const { currentProject, currentIssue } = useProject();
  const location = useLocation();
  /*
  Routes:
  /projects/65cc7df2-35a4-4342-b1ac-b72316a36a01/settings
  /projects/8037cd16-0c74-451e-8b2d-67f7e39563f7/board
  /projects/8037cd16-0c74-451e-8b2d-67f7e39563f7/issues
  /projects/8037cd16-0c74-451e-8b2d-67f7e39563f7/board?issueId=39552749-ec37-4767-87e9-4a76ca621141 
  /projects/8037cd16-0c74-451e-8b2d-67f7e39563f7/issues/ebc304c6-46f7-400e-a9fb-460d8731ff9b
  */
  const pathNames = location.pathname.split('/');
  let pageType: PageType = 'Issue';
  if (pathNames.length === 4) {
    if (pathNames[3] === 'settings') {
      pageType = 'Settings';
    } else if (pathNames[3] === 'board') {
      pageType = 'Board';
    }
  }
  let isDetail = false;
  if (pathNames.length === 5) {
    isDetail = true;
  }
  if (pageType === 'Board') {
    const urlParams = new URLSearchParams(location.search);
    const hasIssueId = Boolean(urlParams.get('issueId'));
    if (hasIssueId) {
      isDetail = true;
    }
  }
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <LinkRouter underline="hover" color="inherit" to="/projects">
        Projects
      </LinkRouter>
      <LinkRouter
        underline="hover"
        color="inherit"
        to={`/projects/${currentProject?.id}/board`}
      >
        {currentProject?.name}
      </LinkRouter>
      {pageType === 'Settings' && <Typography>Settings</Typography>}
      {pageType !== 'Settings' && isDetail && currentIssue && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IssueIcon issueType={currentIssue!.type} />
          <Typography variant="body2" color="text.secondary">
            {currentIssue!.id}
          </Typography>
        </Box>
      )}
    </Breadcrumbs>
  );
};

export default ProjectBreadcrumbs;
