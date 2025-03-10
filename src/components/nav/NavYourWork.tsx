import {
  MenuItem,
  Box,
  Button,
  Menu,
  Typography,
  Divider,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React, { FunctionComponent, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useLocation, useNavigate } from 'react-router-dom';
import type { ProjectIssueProps } from 'types/types';
import IssueTypeIcon from 'components/project/issue/IssueTypeIcon';
import { useProject } from 'contexts/project-context';
import WorkIcon from '@mui/icons-material/Work';
import { getIssuesAssignedToMe } from 'dummyData/dummyData';
import { useAuth } from 'contexts/auth-context';

type ProjectIdNameMapType = { [k: string]: string };

type IssueMenuItemProps = {
  issue: ProjectIssueProps;
  projectIdNameMap: ProjectIdNameMapType;
  onClick: () => void;
};

const IssueMenuItem: FunctionComponent<IssueMenuItemProps> = ({
  issue,
  projectIdNameMap,
  onClick,
}) => {
  let summary = issue.summary;
  if (summary.length > 100) {
    summary = summary.slice(0, 100) + ' ...';
  }
  return (
    <MenuItem onClick={onClick}>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <IssueTypeIcon issueType={issue.type} />
        <Box>
          <Typography variant="body2">{summary}</Typography>
          <Typography variant="caption" color="text.secondary">
            {projectIdNameMap[issue.projectId]}
          </Typography>
        </Box>
      </Box>
    </MenuItem>
  );
};

const NavYourWork: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { allProjects: projects } = useProject();
  const { user } = useAuth();
  const issuesAssignedToMe = getIssuesAssignedToMe(user);
  const projectIdNameMap: ProjectIdNameMapType = {};
  for (const project of projects) {
    projectIdNameMap[project.id] = project.name;
  }
  const issuesInProgress = issuesAssignedToMe.filter(
    (issue) => issue.status === 'IN PROGRESS'
  );
  const issuesTodo = issuesAssignedToMe.filter(
    (issue) => issue.status === 'TO DO'
  );

  const active = location.pathname.startsWith('/your-work');

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const openMenuHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const closeMenuHandler = () => {
    setAnchorEl(null);
  };

  const viewAllWorkHandler = () => {
    setAnchorEl(null);
    navigate('/your-work');
  };

  const clickIssueHandler = (issue: ProjectIssueProps) => {
    setAnchorEl(null);
    navigate(`/projects/${issue.projectId}/issues/${issue.id}`);
  };

  let InProgressMenuItem = (
    <Typography
      key={1}
      variant="caption"
      color="text.secondary"
      fontWeight={700}
      ml={2}
    >
      IN PROGRESS
    </Typography>
  );

  if (issuesInProgress.length === 0) {
    InProgressMenuItem = <Box key={1}></Box>;
  }

  let ToDoMenuItem = (
    <Typography
      key={2}
      variant="caption"
      color="text.secondary"
      fontWeight={700}
      ml={2}
    >
      TO DO
    </Typography>
  );

  if (issuesTodo.length === 0) {
    ToDoMenuItem = <Box key={2}></Box>;
  }

  let content = (
    <>
      <Button
        onClick={openMenuHandler}
        sx={{
          borderBottomWidth: 3,
          borderBottomStyle: 'solid',
          borderBottomColor: 'transparent',
          ...(active && {
            borderBottomColor: 'primary.main',
          }),
          borderRadius: 0,
          height: 64,
        }}
      >
        Your work
        <ExpandMoreIcon fontSize="small" />
      </Button>
      <Menu
        open={open}
        onClose={closeMenuHandler}
        anchorEl={anchorEl}
        PaperProps={{ style: { maxWidth: 800 } }}
      >
        {[
          InProgressMenuItem,
          issuesInProgress.map((issue) => (
            <IssueMenuItem
              key={issue.id}
              issue={issue}
              projectIdNameMap={projectIdNameMap}
              onClick={clickIssueHandler.bind(null, issue)}
            />
          )),
          ToDoMenuItem,
          issuesTodo.map((issue) => (
            <IssueMenuItem
              key={issue.id}
              issue={issue}
              projectIdNameMap={projectIdNameMap}
              onClick={clickIssueHandler.bind(null, issue)}
            />
          )),
          <Divider key={3} />,
          <MenuItem key={4} onClick={viewAllWorkHandler}>
            Go to Your Work page
          </MenuItem>,
        ]}
      </Menu>
    </>
  );

  return content;
};

export default NavYourWork;

export const YourWorkMenuItem: FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <MenuItem onClick={() => navigate('/your-work')}>
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText>Your work</ListItemText>
    </MenuItem>
  );
};
