import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { FunctionComponent } from 'react';
import { useProject } from 'contexts/project-context';
import AllProjectsTable from './AllProjectsTable';
import CreateProjectDialog from './CreateProjectDialog';

const AllProjects: FunctionComponent = () => {
  const { allProjects } = useProject();
  const [createProjectDialogOpen, setCreateProjectDialogOpen] = useState(false);
  const closeCreateProjectDialogHandler = () => {
    setCreateProjectDialogOpen(false);
  };

  const [searchStr, setSearchStr] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);

  useEffect(() => {
    const filterProject = () => {
      let res = [];
      let _str = searchStr.trim().toLowerCase();
      if (_str) {
        for (const project of allProjects) {
          if (project.name.toLowerCase().indexOf(_str) !== -1) {
            res.push({ ...project });
          }
        }
      } else {
        res = allProjects.slice();
      }
      setFilteredProjects(res);
    };
    filterProject();
  }, [searchStr, allProjects]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <CreateProjectDialog
        open={createProjectDialogOpen}
        onClose={closeCreateProjectDialogHandler}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5">Projects</Typography>
        <Button
          variant="contained"
          onClick={() => setCreateProjectDialogOpen(true)}
        >
          Create project
        </Button>
      </Box>
      <Box>
        <TextField
          size="small"
          value={searchStr}
          onChange={(e) => setSearchStr(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <AllProjectsTable projects={filteredProjects} />
    </Box>
  );
};

export default AllProjects;
