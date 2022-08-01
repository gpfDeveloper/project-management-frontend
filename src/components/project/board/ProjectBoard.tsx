import { Box } from '@mui/material';
import { FunctionComponent, useEffect, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import ProjectBoardColumn from './ProjectBoardColumn';
import { History, ProjectIssueProps, ProjectIssueStatus } from 'types/types';
import ProjectBoardFilters from './ProjectBoardFilters';
import { useProject } from 'contexts/project-context';
import { addHistory, updateIssue } from 'dummyData/dummyData';
import { v4 as uuid } from 'uuid';
import { useAuth } from 'contexts/auth-context';

export type ColumnType = { id: string; title: string; issueIds: string[] };
type BoardType = {
  issues: { [k: string]: ProjectIssueProps };
  columns: { [k: string]: ColumnType };
  columnOrder: string[];
};

const ProjectBoard: FunctionComponent = () => {
  const { user } = useAuth();
  const { issuesPerProject: issues, setIssuesPerProject } = useProject();

  const _updateIssue = (_issue: ProjectIssueProps) => {
    const idx = issues.findIndex((item) => item.id === _issue.id);
    if (idx !== -1) {
      const _issues = issues.slice();
      _issue.updatedAt = new Date().toISOString();
      _issues[idx] = _issue;
      setIssuesPerProject(_issues);
      updateIssue(_issue);
    }
  };

  const [filteredIssues, setFilteredIssues] = useState(issues);
  const [filterStr, setFilterStr] = useState('');
  useEffect(() => {
    const _str = filterStr.trim().toLowerCase();
    if (_str) {
      const res: ProjectIssueProps[] = [];
      for (const issue of issues) {
        if (issue.summary.toLowerCase().indexOf(_str) !== -1) {
          res.push(issue);
        }
      }
      setFilteredIssues(res);
    } else {
      setFilteredIssues(issues);
    }
  }, [filterStr, issues]);

  const initialData: BoardType = {
    issues: {},
    columns: {
      'TO DO': {
        id: 'TO DO',
        title: 'TO DO',
        issueIds: [],
      },
      'IN PROGRESS': {
        id: 'IN PROGRESS',
        title: 'IN PROGRESS',
        issueIds: [],
      },
      DONE: {
        id: 'DONE',
        title: 'DONE',
        issueIds: [],
      },
    },
    // Facilitate reordering of the columns
    columnOrder: ['TO DO', 'IN PROGRESS', 'DONE'],
  };

  const [state, setState] = useState<BoardType>(initialData);
  useEffect(() => {
    if (filteredIssues) {
      type issueIdsType = {
        [k in ProjectIssueStatus]: string[];
      };
      const issueIds: issueIdsType = {
        'TO DO': [],
        'IN PROGRESS': [],
        DONE: [],
      };

      let _issues: { [k: string]: ProjectIssueProps } = {};
      for (const issue of filteredIssues) {
        _issues[issue.id] = issue;
        issueIds[issue.status].push(issue.id);
      }
      const _initialData: BoardType = {
        issues: _issues,
        columns: {
          'TO DO': {
            id: 'TO DO',
            title: 'TO DO',
            issueIds: issueIds['TO DO'],
          },
          'IN PROGRESS': {
            id: 'IN PROGRESS',
            title: 'IN PROGRESS',
            issueIds: issueIds['IN PROGRESS'],
          },
          DONE: {
            id: 'DONE',
            title: 'DONE',
            issueIds: issueIds['DONE'],
          },
        },
        // Facilitate reordering of the columns
        columnOrder: ['TO DO', 'IN PROGRESS', 'DONE'],
      };
      setState(_initialData);
    }
  }, [filteredIssues]);

  const dragEndHandler = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
      const newIssueIds = Array.from(start.issueIds);
      newIssueIds.splice(source.index, 1);
      newIssueIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        issueIds: newIssueIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      setState(newState);
      return;
    }

    // Moving from one list to another
    const issueId = draggableId;
    const newStatus = destination.droppableId as ProjectIssueStatus;
    const issue = issues.find((item) => item.id === issueId);
    if (issue) {
      const history: History = {
        id: uuid(),
        createdAt: new Date().toISOString(),
        field: 'Status',
        updatedBy: user!,
        issueId,
        from: issue.status,
        to: newStatus,
      };
      addHistory(history);
      const _issue = { ...issue, status: newStatus } as ProjectIssueProps;
      _updateIssue(_issue);
    }
    const startIssueIds = Array.from(start.issueIds);
    startIssueIds.splice(source.index, 1);
    const newStart = {
      ...start,
      issueIds: startIssueIds,
    };

    const finishIssueIds = Array.from(finish.issueIds);
    finishIssueIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      issueIds: finishIssueIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    setState(newState);
  };

  let boards = state.columnOrder.map((columnId) => {
    const column = state.columns[columnId];
    const issues = column.issueIds.map((issueId) => state.issues[issueId]);
    return (
      <ProjectBoardColumn key={columnId} column={column} issues={issues} />
    );
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <ProjectBoardFilters
        filterStr={filterStr}
        onChangeFilterStr={(e) => setFilterStr(e.target.value)}
      />
      <Box sx={{ display: 'flex', gap: 2 }}>
        <DragDropContext onDragEnd={dragEndHandler}>{boards}</DragDropContext>
      </Box>
    </Box>
  );
};

export default ProjectBoard;
