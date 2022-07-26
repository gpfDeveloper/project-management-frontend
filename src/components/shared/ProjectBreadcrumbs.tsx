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

const ProjectBreadcrumbs: FunctionComponent = () => {
  const { currentProject, currentIssue } = useProject();
  const location = useLocation();
  //"/projects/65cc7df2-35a4-4342-b1ac-b72316a36a01/settings"
  const pathNames = location.pathname.split('/');
  let isSettingPage = false;
  if (pathNames.length === 4 && pathNames[3] === 'settings') {
    isSettingPage = true;
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
      {currentIssue && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IssueIcon issueType={currentIssue!.type} />
          <Typography variant="body2" color="text.secondary">
            {currentIssue!.id}
          </Typography>
        </Box>
      )}
      {!currentIssue && isSettingPage && <Typography>Settings</Typography>}
    </Breadcrumbs>
  );
};

export default ProjectBreadcrumbs;
