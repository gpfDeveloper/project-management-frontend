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
import ProjectAvatar from 'components/project/setting/ProjectAvatar';
import type { ProjectProps } from 'types/types';
import { getRecentProjects } from 'utils/utils';
import { useProject } from 'contexts/project-context';
import CreateProjectDialog from 'components/project/allProjects/CreateProjectDialog';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';

type ProjectMenuItemProps = {
  project: ProjectProps;
  onClick: () => void;
};

const ProjectMenuItem: FunctionComponent<ProjectMenuItemProps> = ({
  project,
  onClick,
}) => {
  return (
    <MenuItem onClick={onClick}>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <ProjectAvatar name={project.avatar} />
        <Box>
          <Typography variant="body2">{project.name}</Typography>
          <Typography variant="caption" color="text.secondary">
            {project.type}
          </Typography>
        </Box>
      </Box>
    </MenuItem>
  );
};

const NavProjects: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { allProjects } = useProject();

  const recentProjects = getRecentProjects(allProjects);

  const active = location.pathname.startsWith('/project');

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const openMenuHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const closeMenuHandler = () => {
    setAnchorEl(null);
  };

  const viewAllProjectHandler = () => {
    setAnchorEl(null);
    navigate('/projects');
  };

  const clickProjectHandler = (projectId: string) => {
    setAnchorEl(null);
    navigate(`/projects/${projectId}/board`);
  };

  const [createProjectDialogOpen, setCreateProjectDialogOpen] = useState(false);
  const clickCreateProjectHandler = () => {
    setAnchorEl(null);
    setCreateProjectDialogOpen(true);
  };
  const closeCreateProjectDialogHandler = () => {
    setCreateProjectDialogOpen(false);
  };

  let content = (
    <>
      <CreateProjectDialog
        open={createProjectDialogOpen}
        onClose={closeCreateProjectDialogHandler}
      />
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
        Projects
        <ExpandMoreIcon fontSize="small" />
      </Button>
      <Menu
        open={open}
        onClose={closeMenuHandler}
        anchorEl={anchorEl}
        PaperProps={{ style: { minWidth: 200 } }}
      >
        {[
          <Typography
            key={1}
            variant="caption"
            color="text.secondary"
            fontWeight={700}
            ml={2}
            pb={2}
          >
            RECENT
          </Typography>,
          recentProjects.map((project) => (
            <ProjectMenuItem
              key={project.id}
              project={project}
              onClick={clickProjectHandler.bind(null, project.id)}
            />
          )),
          <Divider key={2} />,
          <MenuItem key={3} onClick={viewAllProjectHandler}>
            View all projects
          </MenuItem>,
          <MenuItem key={4} onClick={clickCreateProjectHandler}>
            Create project
          </MenuItem>,
        ]}
      </Menu>
    </>
  );

  return content;
};

export default NavProjects;

export const ProjectsMenuItem: FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <MenuItem onClick={() => navigate('/projects')}>
      <ListItemIcon>
        <DashboardCustomizeIcon />
      </ListItemIcon>
      <ListItemText>Projects</ListItemText>
    </MenuItem>
  );
};
