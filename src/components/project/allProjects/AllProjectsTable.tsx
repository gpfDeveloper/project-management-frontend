import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { ProjectProps } from 'types/types';
import { FunctionComponent } from 'react';

type Props = {
  projects: ProjectProps[];
};

const AllProjectsTable: FunctionComponent<Props> = ({ projects }) => {
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
              }}
            >
              <TableCell align="left">{project.name}</TableCell>
              <TableCell align="left">{project.type}</TableCell>
              <TableCell align="left">{project.lead.name}</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllProjectsTable;
