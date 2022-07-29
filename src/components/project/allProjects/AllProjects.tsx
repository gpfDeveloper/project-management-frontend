import { useState } from 'react';
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
  const filteredProjects = allProjects;
  const [createProjectDialogOpen, setCreateProjectDialogOpen] = useState(false);
  const closeCreateProjectDialogHandler = () => {
    setCreateProjectDialogOpen(false);
  };

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
