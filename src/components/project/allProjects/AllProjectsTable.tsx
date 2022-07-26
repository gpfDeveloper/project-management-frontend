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
  const menuOpenHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(e.currentTarget);
  };
  const menuCloseHandler = () => {
    setAnchor(null);
  };
  const deleteProjectHandler = () => {
    setAnchor(null);
  };
  const projectSettingHandler = (projectId: string) => {
    setAnchor(null);
    console.log(projectId);
    navigate(`/projects/${projectId}/settings`);
  };

  return (
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
              <TableCell align="center">
                <Box>
                  <IconButton onClick={menuOpenHandler}>
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
                    <MenuItem
                      onClick={projectSettingHandler.bind(this, project.id)}
                    >
                      Project Settings
                    </MenuItem>
                    <MenuItem
                      onClick={deleteProjectHandler.bind(this, project.id)}
                    >
                      Delete Project
                    </MenuItem>
                  </Menu>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllProjectsTable;
