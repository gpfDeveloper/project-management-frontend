import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
} from '@mui/material';
import { ProjectProps } from 'types/types';
import { FunctionComponent } from 'react';
import StringAvatar from 'components/shared/StringAvatar';
import ProjectAvatar from '../setting/ProjectAvatar';
import LinkRouter from 'components/shared/LinkRouter';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useNavigate } from 'react-router-dom';
import DeleteProjectDialog from '../setting/DeleteProjectDialog';
import { useAuth } from 'contexts/auth-context';

type Props = {
  projects: ProjectProps[];
};

const AllProjectsTable: FunctionComponent<Props> = ({ projects }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const mode = theme.palette.mode;
  const grey =
    mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900];

  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchor);
  const [currentProjectId, setCurrentProjectId] = useState('');
  const menuOpenHandler = (
    pid: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setCurrentProjectId(pid);
    setAnchor(e.currentTarget);
  };
  const menuCloseHandler = () => {
    setAnchor(null);
  };
  const deleteProjectHandler = () => {
    setAnchor(null);
    setDeleteProjectDialogOpen(true);
  };
  const projectSettingHandler = () => {
    setAnchor(null);
    navigate(`/projects/${currentProjectId}/settings`);
  };

  const [deleteProjectDialogOpen, setDeleteProjectDialogOpen] = useState(false);
  const closeDeleteProjectDialogHandler = () => {
    setDeleteProjectDialogOpen(false);
  };

  const { user } = useAuth();
  const canAction = user!.role === 'Admin';

  return (
    <>
      <DeleteProjectDialog
        open={deleteProjectDialogOpen}
        onClose={closeDeleteProjectDialogHandler}
        projectId={currentProjectId}
      />
      <TableContainer component={Paper}>
        <Table
          sx={{
            '& td': {
              borderColor: 'transparent',
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Type</TableCell>
              <TableCell align="left">Lead</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow
                key={project.id}
                sx={{
                  backgroundColor: 'transparent',
                  '&: hover': { backgroundColor: grey },
                }}
              >
                <TableCell align="left">
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <ProjectAvatar name={project.avatar} />
                    <LinkRouter underline="hover" to={`${project.id}/board`}>
                      <Typography variant="body2">{project.name}</Typography>
                    </LinkRouter>
                  </Box>
                </TableCell>
                <TableCell align="left">{project.type}</TableCell>
                <TableCell align="left">
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <StringAvatar
                      height={30}
                      width={30}
                      name={project.lead.name}
                    />
                    <Typography variant="body2">{project.lead.name}</Typography>
                  </Box>
                </TableCell>
                {canAction && (
                  <TableCell align="center">
                    <Box>
                      <IconButton
                        onClick={menuOpenHandler.bind(null, project.id)}
                      >
                        <MoreHorizIcon />
                      </IconButton>
                      <Menu
                        elevation={1}
                        anchorEl={anchor}
                        open={menuOpen}
                        onClose={menuCloseHandler}
                        transformOrigin={{
                          vertical: 'center',
                          horizontal: 'right',
                        }}
                      >
                        <MenuItem onClick={projectSettingHandler}>
                          Project Settings
                        </MenuItem>
                        <MenuItem onClick={deleteProjectHandler}>
                          Delete Project
                        </MenuItem>
                      </Menu>
                    </Box>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AllProjectsTable;
