import { Box } from '@mui/material';
import { FunctionComponent, useEffect, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import ProjectBoardColumn from './ProjectBoardColumn';
import { ProjectIssueProps } from 'types/types';
import ProjectBoardFilters from './ProjectBoardFilters';
import { useProject } from 'contexts/project-context';

export type ColumnType = { id: string; title: string; issueIds: string[] };
type BoardType = {
  issues: { [k: string]: ProjectIssueProps };
  columns: { [k: string]: ColumnType };
  columnOrder: string[];
};

const ProjectBoard: FunctionComponent = () => {
  const { issuesPerProject: issues } = useProject();
  const initialData: BoardType = {
    issues: {},
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'TO DO',
        issueIds: [],
      },
      'column-2': {
        id: 'column-2',
        title: 'IN PROGRESS',
        issueIds: [],
      },
      'column-3': {
        id: 'column-3',
        title: 'DONE',
        issueIds: [],
      },
    },
    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3'],
  };

  const [state, setState] = useState<BoardType>(initialData);
  useEffect(() => {
    if (issues) {
      const issueIds: string[] = [];

      let _issues: { [k: string]: ProjectIssueProps } = {};
      for (const issue of issues) {
        _issues[issue.id] = issue;
        issueIds.push(issue.id);
      }
      const _initialData: BoardType = {
        issues: _issues,
        columns: {
          'column-1': {
            id: 'column-1',
            title: 'TO DO',
            issueIds,
          },
          'column-2': {
            id: 'column-2',
            title: 'IN PROGRESS',
            issueIds: [],
          },
          'column-3': {
            id: 'column-3',
            title: 'DONE',
            issueIds: [],
          },
        },
        // Facilitate reordering of the columns
        columnOrder: ['column-1', 'column-2', 'column-3'],
      };
      setState(_initialData);
    }
  }, [issues]);

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
      <ProjectBoardFilters />
      <Box sx={{ display: 'flex', gap: 2 }}>
        <DragDropContext onDragEnd={dragEndHandler}>{boards}</DragDropContext>
      </Box>
    </Box>
  );
};

export default ProjectBoard;
