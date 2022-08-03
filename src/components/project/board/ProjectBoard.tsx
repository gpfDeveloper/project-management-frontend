import { Box } from '@mui/material';
import { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import ProjectBoardColumn from './ProjectBoardColumn';
import { History, ProjectIssueProps, ProjectIssueStatus } from 'types/types';
import ProjectBoardFilters from './ProjectBoardFilters';
import { useProject } from 'contexts/project-context';
import { addHistory, updateIssue } from 'dummyData/dummyData';
import { v4 as uuid } from 'uuid';
import { useAuth } from 'contexts/auth-context';

export type AssigneeAvatarType = {
  name: string;
  email: string;
  isSelected: boolean;
};

export type ColumnType = { id: string; title: string; issueIds: string[] };
type BoardType = {
  issues: { [k: string]: ProjectIssueProps };
  columns: { [k: string]: ColumnType };
  columnOrder: string[];
};

const ProjectBoard: FunctionComponent = () => {
  const { user } = useAuth();
  const {
    issuesPerProject: issues,
    setIssuesPerProject,
    currentProject,
  } = useProject();

  const initAssginees = useMemo<AssigneeAvatarType[]>(
    () => [
      {
        name: currentProject!.lead.name,
        email: currentProject!.lead.email,
        isSelected: false,
      },
    ],
    [currentProject]
  );
  const [assignees, setAssignees] = useState(initAssginees);
  const clickAssigneeHandler = (email: string) => {
    const _assignees = assignees.map((item) => {
      if (item.email === email) {
        return { ...item, isSelected: !item.isSelected };
      } else {
        return { ...item };
      }
    });
    setAssignees(_assignees);
  };

  useEffect(() => {
    if (issues) {
      let _assignees = initAssginees;
      for (const issue of issues) {
        if (
          _assignees.findIndex(
            (item) => item.email === issue.assignee.email
          ) === -1
        ) {
          _assignees.push({ ...issue.assignee, isSelected: false });
        }
      }
      setAssignees(_assignees);
    }
  }, [issues, currentProject, initAssginees]);

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
  const [isOnlyMyIssues, setIsOnlyMyIssues] = useState(false);
  const [isRecentUpdated, setIsRecentUpdated] = useState(false);

  const clickOnlyMyIssueHandler = () => {
    setIsOnlyMyIssues((pre) => !pre);
  };
  const clickRecentUpdatedHandler = () => {
    setIsRecentUpdated((pre) => !pre);
  };
  const clickClearAllHandler = () => {
    setIsOnlyMyIssues(false);
    setIsRecentUpdated(false);
    setFilterStr('');
    let _assignees = assignees.map((item) => ({ ...item, isSelected: false }));
    setAssignees(_assignees);
  };
  useEffect(() => {
    const _str = filterStr.trim().toLowerCase();
    let res: ProjectIssueProps[] = [];
    if (_str) {
      for (const issue of issues) {
        if (issue.summary.toLowerCase().indexOf(_str) !== -1) {
          res.push(issue);
        }
      }
    } else {
      res = issues.slice();
    }
    if (isOnlyMyIssues) {
      res = res.filter((item) => item.assignee.email === user!.email);
    }
    if (isRecentUpdated) {
      const now = new Date();
      res = res.filter((item) => {
        const offset = now.getTime() - new Date(item.updatedAt).getTime();
        return offset < 24 * 60 * 60 * 1000;
      });
    }
    //filter selected assignee
    let numOfUnselected = 0;
    let numOfSelected = 0;
    for (const assignee of assignees) {
      if (assignee.isSelected) numOfSelected += 1;
      else numOfUnselected += 1;
    }
    //Do not filter if all assignees unselected, or all assignee selected
    if (numOfSelected === 0 || numOfUnselected === 0) {
      setFilteredIssues(res);
    } else {
      const selectedEmails = assignees
        .filter((item) => item.isSelected)
        .map((item) => item.email);
      res = res.filter(
        (item) => selectedEmails.indexOf(item.assignee.email) !== -1
      );
      setFilteredIssues(res);
    }
  }, [filterStr, issues, user, isOnlyMyIssues, isRecentUpdated, assignees]);

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

  let showClearAll = false;
  if (filterStr || isOnlyMyIssues || isRecentUpdated) {
    showClearAll = true;
  }
  if (!showClearAll) {
    for (const assignee of assignees) {
      if (assignee.isSelected) {
        showClearAll = true;
        break;
      }
    }
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <ProjectBoardFilters
        filterStr={filterStr}
        onChangeFilterStr={(e) => setFilterStr(e.target.value)}
        isOnlyMyIssue={isOnlyMyIssues}
        onClickOnlyMyIssue={clickOnlyMyIssueHandler}
        isRecentUpdated={isRecentUpdated}
        onClickRecentUpdated={clickRecentUpdatedHandler}
        assignees={assignees}
        onClickAssignee={clickAssigneeHandler}
        onClearAll={clickClearAllHandler}
        showClearAll={showClearAll}
      />
      <Box sx={{ display: 'flex', gap: 2 }}>
        <DragDropContext onDragEnd={dragEndHandler}>{boards}</DragDropContext>
      </Box>
    </Box>
  );
};

export default ProjectBoard;
