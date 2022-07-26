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

const AllProjects: FunctionComponent = () => {
  const { allMyProjects } = useProject();
  const filteredProjects = allMyProjects;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5">Projects</Typography>
        <Button variant="contained">Create project</Button>
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
