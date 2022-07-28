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
import PeopleTable from './PeopleTable';

const People: FunctionComponent = () => {
  const { teamMembers } = useProject();
  const filteredPeople = teamMembers.filter((member) => member.email !== '');
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5">People</Typography>
        <Button variant="contained">Add People</Button>
      </Box>
      <Box>
        <TextField
          size="small"
          placeholder="Enter name or email"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <PeopleTable teamMember={filteredPeople} />
    </Box>
  );
};

export default People;
