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
  useTheme,
  Button,
} from '@mui/material';
import { TeamMember } from 'types/types';
import { FunctionComponent } from 'react';
import StringAvatar from 'components/shared/StringAvatar';
import { useProject } from 'contexts/project-context';

type Props = {
  teamMembers: TeamMember[];
};

const PeopleTable: FunctionComponent<Props> = ({ teamMembers }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const grey =
    mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900];

  const { setTeamMembers } = useProject();
  const suspendAccessHandler = (email: string) => {
    setTeamMembers((pre) => {
      const ret: TeamMember[] = pre.map((item) => {
        if (item.email === email) {
          return { ...item, status: 'Suspended' };
        } else {
          return { ...item };
        }
      });
      return ret;
    });
  };
  const restoreAccessHandler = (email: string) => {
    setTeamMembers((pre) => {
      const ret: TeamMember[] = pre.map((item) => {
        if (item.email === email) {
          return { ...item, status: 'Active' };
        } else {
          return { ...item };
        }
      });
      return ret;
    });
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
            <TableCell align="left">User</TableCell>
            <TableCell align="left">Role</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teamMembers.map((member) => {
            let action = <></>;
            if (member.role !== 'Admin') {
              if (member.status === 'Active') {
                action = (
                  <Button
                    onClick={suspendAccessHandler.bind(null, member.email)}
                  >
                    Suspend access
                  </Button>
                );
              }
              if (member.status === 'Suspended') {
                action = (
                  <Button
                    onClick={restoreAccessHandler.bind(null, member.email)}
                  >
                    Restore access
                  </Button>
                );
              }
            }
            return (
              <TableRow
                key={member.email}
                sx={{
                  backgroundColor: 'transparent',
                  '&: hover': { backgroundColor: grey },
                }}
              >
                <TableCell align="left">
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <StringAvatar name={member.name} />
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0.3,
                      }}
                    >
                      <Box sx={{ display: 'flex' }}>
                        <Typography variant="body2">{member.name}</Typography>
                      </Box>
                      <Typography variant="caption" color="text.secondary">
                        {member.email}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="left">{member.role}</TableCell>
                <TableCell align="left">{member.status}</TableCell>
                <TableCell align="left">{action}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PeopleTable;
