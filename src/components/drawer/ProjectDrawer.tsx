import { useState, FunctionComponent, ReactNode } from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import {
  Typography,
  Box,
  Drawer as MuiDrawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TaskIcon from '@mui/icons-material/Task';
import SettingsIcon from '@mui/icons-material/Settings';
import { useLocation, useNavigate } from 'react-router-dom';
import { useProject } from 'contexts/project-context';
import ProjectAvatar from 'components/project/setting/ProjectAvatar';
import { useAuth } from 'contexts/auth-context';

const drawerWidth = 200;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

type Props = {
  children: ReactNode;
};
const ProjectDrawer: FunctionComponent<Props> = ({ children }) => {
  const theme = useTheme();
  const isBelowSm = useMediaQuery(theme.breakpoints.down('sm'));
  const marginTop = isBelowSm ? 58 : 66;
  const mode = theme.palette.mode;
  const grey =
    mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900];
  const [open, setOpen] = useState(true);
  const location = useLocation();
  // /project/sampleproject/board => board
  const locations = location.pathname.split('/');
  const projectId = locations[2];
  const sideBarLoc = locations[3];
  const navigate = useNavigate();
  const { currentProject } = useProject();
  const { user } = useAuth();
  const canSeeSettings =
    user!.role === 'Admin' ||
    user!.email === currentProject!.owner.email ||
    user!.email === currentProject!.lead.email;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  let projectName = currentProject?.name;
  if (projectName) {
    if (projectName.length > 15) {
      projectName = projectName.slice(0, 12) + ' ...';
    }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{ style: { marginTop, backgroundColor: grey } }}
      >
        <Box
          sx={{
            ...(open && { py: 2 }),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {open && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 2 }}
              >
                <ProjectAvatar name={currentProject?.avatar || 'Rocket'} />
                <Box>
                  <Typography sx={{ fontWeight: 700 }}>
                    {projectName}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {currentProject?.type} Project
                  </Typography>
                </Box>
              </Box>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </Box>
          )}
          {!open && (
            <IconButton onClick={handleDrawerOpen}>
              <ChevronRightIcon />
            </IconButton>
          )}
        </Box>
        <Divider />
        <List>
          {['Board', 'Issues'].map((text) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                selected={sideBarLoc === text.toLowerCase()}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={() =>
                  navigate(`/projects/${projectId}/${text.toLocaleLowerCase()}`)
                }
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {text === 'Board' && <DashboardIcon />}
                  {text === 'Issues' && <TaskIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {canSeeSettings && (
          <>
            <Divider />
            <List>
              {['Settings'].map((text) => (
                <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    onClick={() =>
                      navigate(
                        `/projects/${projectId}/${text.toLocaleLowerCase()}`
                      )
                    }
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 2 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {text === 'Settings' && <SettingsIcon />}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </>
        )}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, pl: 2 }}>
        {children}
      </Box>
    </Box>
  );
};

export default ProjectDrawer;
