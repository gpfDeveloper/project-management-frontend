import {
  Box,
  Button,
  Typography,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { FunctionComponent, useEffect, useState, useMemo } from 'react';
import { useProject } from 'contexts/project-context';
import PeopleTable from './PeopleTable';
import AddPeopleDialog from './AddPeopleDialog';
import { TeamMember } from 'types/types';

const People: FunctionComponent = () => {
  const { teamMembers, setTeamMembers } = useProject();
  const [searchStr, setSearchStr] = useState('');
  // Remove unassigned
  let initialPeople = useMemo(
    () => teamMembers.filter((member) => member.email !== ''),
    [teamMembers]
  );
  const [filteredPeople, setFilteredPeople] =
    useState<TeamMember[]>(initialPeople);
  useEffect(() => {
    const filterPeople = () => {
      let res = [];
      let _str = searchStr.trim().toLowerCase();
      if (_str) {
        for (const member of initialPeople) {
          if (
            member.email.toLowerCase().indexOf(_str) !== -1 ||
            member.name.toLowerCase().indexOf(_str) !== -1
          ) {
            res.push({ ...member });
          }
        }
      } else {
        res = initialPeople.slice();
      }
      setFilteredPeople(res);
    };
    filterPeople();
  }, [searchStr, initialPeople]);
  const [addPeopleDialogOpen, setAddPeopleDialogOpen] = useState(false);
  const closeAddPeopleDialogHandler = () => {
    setAddPeopleDialogOpen(false);
  };
  const addPeopleHandler = (email: string) => {
    const member: TeamMember = {
      name: email.split('@')[0],
      email,
      role: 'User',
      status: 'Invited',
    };
    setTeamMembers((pre) => [member, ...pre]);
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <AddPeopleDialog
        open={addPeopleDialogOpen}
        onAdd={addPeopleHandler}
        onClose={closeAddPeopleDialogHandler}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5">People</Typography>
        <Button
          variant="contained"
          onClick={() => setAddPeopleDialogOpen(true)}
        >
          Add People
        </Button>
      </Box>
      <Box>
        <TextField
          size="small"
          value={searchStr}
          onChange={(e) => setSearchStr(e.target.value)}
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
      <PeopleTable teamMembers={filteredPeople} />
    </Box>
  );
};

export default People;
