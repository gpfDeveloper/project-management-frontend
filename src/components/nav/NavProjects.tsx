import { MenuItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { FunctionComponent } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkIcon from '@mui/icons-material/Work';
import { useLocation, useNavigate } from 'react-router-dom';

const NavProjects: FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const clickBtnHandler = () => {
    navigate('/projects');
  };
  const active = location.pathname.startsWith('/project');
  let content = (
    <>
      <Button
        onClick={clickBtnHandler}
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
    </>
  );

  return content;
};

export const ProjectsMenuItem: FunctionComponent = () => {
  let content = (
    <MenuItem>
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText>Projects</ListItemText>
    </MenuItem>
  );

  return content;
};
export default NavProjects;
