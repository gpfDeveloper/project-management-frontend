import { Box } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'type', headerName: 'Type' },
  { field: 'summary', headerName: 'Summary' },
  { field: 'assignee', headerName: 'Assignee' },
  { field: 'reporter', headerName: 'Reporter' },
  { field: 'priority', headerName: 'P' },
  { field: 'status', headerName: 'Status' },
  { field: 'created', headerName: 'Created' },
  { field: 'updated', headerName: 'Updated' },
  { field: 'due', headerName: 'Due' },
];

const rows = [
  {
    id: 1,
    type: 'task',
    summary:
      'When the last task is done, the story can be automatically closed >> Drag this task to "Done" too',
    assignee: 'Unassigned',
    reporter: 'Pengfei Gao',
    priority: 'high',
    status: 'TO DO',
    created: 'Jul 7, 2022',
    updated: 'Jul 7, 2022',
    due: 'Jul 7, 2022',
  },
  {
    id: 2,
    type: 'bug',
    summary:
      "Detail: As a developer, I'd like to update story status during the sprint >> Click the Active sprints link at the top right of the screen to go to the Active sprints where the current Sprint's items can be updated.",
    assignee: 'Unassigned',
    reporter: 'Pengfei Gao',
    priority: 'high',
    status: 'TO DO',
    created: 'Jul 7, 2022',
    updated: 'Jul 7, 2022',
    due: 'Jul 7, 2022',
  },
];

export default function AllIssuesDataGrid() {
  return (
    <Box sx={{ height: 600, width: 1 }}>
      <DataGrid
        columns={columns}
        rows={rows}
        disableDensitySelector
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </Box>
  );
}
