import { Box, Chip, Tooltip, Typography } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridToolbar,
  GridComparatorFn,
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
  ProjectIssueProps,
  ProjectIssueStatus,
  ProjectIssueType,
} from 'types/types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import StringAvatar from 'components/shared/StringAvatar';
import { FunctionComponent } from 'react';
import { useProject } from 'contexts/project-context';

const PriorityValue = {
  Lowest: 0,
  Low: 1,
  Medium: 2,
  High: 3,
  Highest: 4,
};

const priorityComparator: GridComparatorFn<ProjectIssuePriority> = (v1, v2) =>
  PriorityValue[v1] - PriorityValue[v2];

const dataTransfer = (issues: ProjectIssueProps[]) => {
  const rows = [];
  for (const issue of issues) {
    const row = {
      ...issue,
      reporter: issue.reporter.name,
      assignee: issue.assignee.name,
    };
    rows.push(row);
  }
  return rows;
};

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

const renderPeople = (params: GridRenderCellParams<string>) => {
  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', gap: 0.8, width: '100%' }}
    >
      <StringAvatar height={30} width={30} name={params.value!} />
      <Typography variant="body2">{params.value}</Typography>
    </Box>
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
  {
    field: 'type',
    headerName: 'Type',
    renderCell: renderType,
    width: 30,
    type: 'singleSelect',
    valueOptions: ['Bug', 'Story', 'Task'],
  },
  {
    field: 'summary',
    headerName: 'Summary',
    renderCell: renderSummary,
    sortable: false,
    minWidth: 480,
    flex: 1,
  },
  {
    field: 'assignee',
    headerName: 'Assignee',
    renderCell: renderPeople,
    minWidth: 150,
  },
  {
    field: 'reporter',
    headerName: 'Reporter',
    renderCell: renderPeople,
    minWidth: 150,
  },
  {
    field: 'priority',
    headerName: 'P',
    renderCell: renderPriority,
    width: 30,
    type: 'singleSelect',
    valueOptions: ['Highest', 'High', 'Medium', 'Low', 'Lowest'],
    sortComparator: priorityComparator,
  },
  {
    field: 'status',
    headerName: 'Status',
    renderCell: renderStatus,
    width: 120,
    type: 'singleSelect',
    valueOptions: ['TO DO', 'IN PROGRESS', 'DONE'],
  },
  {
    field: 'createdAt',
    headerName: 'Created',
    type: 'date',
    width: 110,
    valueFormatter: (params) => moment(params?.value).format('MMM D[,] YYYY'),
  },
  {
    field: 'updatedAt',
    headerName: 'Updated',
    type: 'date',
    width: 110,
    valueFormatter: (params) => moment(params?.value).format('MMM D[,] YYYY'),
  },
  {
    field: 'dueAt',
    headerName: 'Due',
    type: 'date',
    width: 110,
    valueFormatter: (params) => {
      if (!params.value) return null;
      return moment(params.value).format('MMM D[,] YYYY');
    },
  },
];

const AllIssuesDataGrid: FunctionComponent = () => {
  const { allIssues } = useProject();
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ flexGrow: 1 }}>
        <DataGrid
          autoHeight
          getRowHeight={() => 'auto'}
          columns={columns}
          rows={dataTransfer(allIssues)}
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
};
export default AllIssuesDataGrid;
