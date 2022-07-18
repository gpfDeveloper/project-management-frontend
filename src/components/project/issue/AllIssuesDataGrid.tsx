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
  ProjectIssuePriority,
  ProjectIssueStatus,
  ProjectIssueType,
} from 'types/project';
import { Link } from 'react-router-dom';
import { sampleIssues } from 'dummyData/dummyData';

const renderType = (params: GridRenderCellParams<ProjectIssueType>) => {
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

const renderPriority = (params: GridRenderCellParams<ProjectIssuePriority>) => {
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

const renderStatus = (params: GridRenderCellParams<ProjectIssueStatus>) => {
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
    minWidth: 480,
    flex: 1,
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

export default function AllIssuesDataGrid() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ flexGrow: 1 }}>
        <DataGrid
          autoHeight
          getRowHeight={() => 'auto'}
          columns={columns}
          rows={sampleIssues}
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
    </Box>
  );
}
