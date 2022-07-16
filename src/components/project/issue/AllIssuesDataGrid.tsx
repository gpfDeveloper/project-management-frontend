import { Box, Chip, Tooltip, Typography } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridToolbar,
} from '@mui/x-data-grid';
import BugReportIcon from '@mui/icons-material/BugReport';
import TaskIcon from '@mui/icons-material/Task';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import type {
  projectIssuePriority,
  projectIssueStatus,
  projectIssueType,
} from 'types/project';
import { Link } from 'react-router-dom';

const renderType = (params: GridRenderCellParams<projectIssueType>) => {
  let icon = <TaskIcon fontSize="small" color="info" />;
  if (params.value === 'Bug')
    icon = <BugReportIcon fontSize="small" color="error" />;
  if (params.value === 'Story')
    icon = <BookmarkIcon fontSize="small" color="success" />;
  return <Tooltip title={params.value!}>{icon}</Tooltip>;
};

const renderSummary = (params: GridRenderCellParams<string>) => {
  return (
    <Link to={`${params.id}`}>
      <Typography sx={{ fontSize: 14, color: 'info.main', fontWeight: 500 }}>
        {params.value}
      </Typography>
    </Link>
  );
};

const renderPriority = (params: GridRenderCellParams<projectIssuePriority>) => {
  let icon = <DragHandleIcon color="warning" />;
  switch (params.value) {
    case 'Highest':
      icon = <KeyboardDoubleArrowUpIcon color="error" />;
      break;
    case 'High':
      icon = <KeyboardArrowUpIcon color="error" />;
      break;
    case 'Low':
      icon = <KeyboardArrowDownIcon color="info" />;
      break;
    case 'Lowest':
      icon = <KeyboardDoubleArrowDownIcon color="info" />;
      break;
  }
  return <Tooltip title={params.value!}>{icon}</Tooltip>;
};

const renderStatus = (params: GridRenderCellParams<projectIssueStatus>) => {
  let color: 'default' | 'info' | 'success' = 'default';
  if (params.value === 'IN PROGRESS') color = 'info';
  if (params.value === 'DONE') color = 'success';
  return <Chip size="small" label={params.value} color={color} />;
};

const columns: GridColDef[] = [
  { field: 'type', headerName: 'Type', renderCell: renderType, width: 30 },
  {
    field: 'summary',
    headerName: 'Summary',
    renderCell: renderSummary,
    width: 480,
  },
  { field: 'assignee', headerName: 'Assignee' },
  { field: 'reporter', headerName: 'Reporter' },
  { field: 'priority', headerName: 'P', renderCell: renderPriority, width: 30 },
  {
    field: 'status',
    headerName: 'Status',
    renderCell: renderStatus,
    width: 120,
  },
  { field: 'created', headerName: 'Created' },
  { field: 'updated', headerName: 'Updated' },
  { field: 'due', headerName: 'Due' },
];

const rows = [
  {
    id: 1,
    type: 'Task',
    summary:
      'When the last task is done, the story can be automatically closed >> Drag this task to "Done" too',
    assignee: 'Pengfei Gao',
    reporter: 'Pengfei Gao',
    priority: 'Low',
    status: 'TO DO',
    created: 'Jul 7, 2022',
    updated: 'Jul 7, 2022',
    due: 'Jul 7, 2022',
  },
  {
    id: 2,
    type: 'Bug',
    summary:
      "Detail: As a developer, I'd like to update story status during the sprint >> Click the Active sprints link at the top right of the screen to go to the Active sprints where the current Sprint's items can be updated.",
    assignee: 'Unassigned',
    reporter: 'Pengfei Gao',
    priority: 'Lowest',
    status: 'TO DO',
    created: 'Jul 7, 2022',
    updated: 'Jul 7, 2022',
    due: 'Jul 7, 2022',
  },
  {
    id: 3,
    type: 'Story',
    summary:
      "Detail: As a developer, I'd like to update story status during the sprint >> Click the Active sprints link at the top right of the screen to go to the Active sprints where the current Sprint's items can be updated.",
    assignee: 'Unassigned',
    reporter: 'Pengfei Gao',
    priority: 'High',
    status: 'IN PROGRESS',
    created: 'Jul 7, 2022',
    updated: 'Jul 7, 2022',
    due: 'Jul 7, 2022',
  },
  {
    id: 4,
    type: 'Bug',
    summary:
      "Detail: As a developer, I'd like to update story status during the sprint >> Click the Active sprints link at the top right of the screen to go to the Active sprints where the current Sprint's items can be updated.",
    assignee: 'Unassigned',
    reporter: 'Pengfei Gao',
    priority: 'Highest',
    status: 'DONE',
    created: 'Jul 7, 2022',
    updated: 'Jul 7, 2022',
    due: 'Jul 7, 2022',
  },
  {
    id: 5,
    type: 'Story',
    summary:
      "Detail: As a developer, I'd like to update story status during the sprint >> Click the Active sprints link at the top right of the screen to go to the Active sprints where the current Sprint's items can be updated.",
    assignee: 'Unassigned',
    reporter: 'Pengfei Gao',
    priority: 'Medium',
    status: 'TO DO',
    created: 'Jul 7, 2022',
    updated: 'Jul 7, 2022',
    due: 'Jul 7, 2022',
  },
  {
    id: 6,
    type: 'Task',
    summary:
      'When the last task is done, the story can be automatically closed >> Drag this task to "Done" too',
    assignee: 'Pengfei Gao',
    reporter: 'Pengfei Gao',
    priority: 'Low',
    status: 'TO DO',
    created: 'Jul 7, 2022',
    updated: 'Jul 7, 2022',
    due: 'Jul 7, 2022',
  },
  {
    id: 7,
    type: 'Bug',
    summary:
      "Detail: As a developer, I'd like to update story status during the sprint >> Click the Active sprints link at the top right of the screen to go to the Active sprints where the current Sprint's items can be updated.",
    assignee: 'Unassigned',
    reporter: 'Pengfei Gao',
    priority: 'Lowest',
    status: 'TO DO',
    created: 'Jul 7, 2022',
    updated: 'Jul 7, 2022',
    due: 'Jul 7, 2022',
  },
  {
    id: 8,
    type: 'Story',
    summary:
      "Detail: As a developer, I'd like to update story status during the sprint >> Click the Active sprints link at the top right of the screen to go to the Active sprints where the current Sprint's items can be updated.",
    assignee: 'Unassigned',
    reporter: 'Pengfei Gao',
    priority: 'High',
    status: 'IN PROGRESS',
    created: 'Jul 7, 2022',
    updated: 'Jul 7, 2022',
    due: 'Jul 7, 2022',
  },
  {
    id: 9,
    type: 'Bug',
    summary:
      "Detail: As a developer, I'd like to update story status during the sprint >> Click the Active sprints link at the top right of the screen to go to the Active sprints where the current Sprint's items can be updated.",
    assignee: 'Unassigned',
    reporter: 'Pengfei Gao',
    priority: 'Highest',
    status: 'DONE',
    created: 'Jul 7, 2022',
    updated: 'Jul 7, 2022',
    due: 'Jul 7, 2022',
  },
  {
    id: 10,
    type: 'Story',
    summary:
      "Detail: As a developer, I'd like to update story status during the sprint >> Click the Active sprints link at the top right of the screen to go to the Active sprints where the current Sprint's items can be updated.",
    assignee: 'Unassigned',
    reporter: 'Pengfei Gao',
    priority: 'Medium',
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
        getRowHeight={() => 'auto'}
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
        sx={{
          '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': {
            py: '12px',
          },
        }}
      />
    </Box>
  );
}
