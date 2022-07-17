import { Box, Typography } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';

type TaskType = { id: string; content: string };
type ColumnType = { id: string; title: string; taskIds: string[] };
type BoardType = {
  tasks: { [k: string]: TaskType };
  columns: { [k: string]: ColumnType };
  columnOrder: string[];
};

const initialData: BoardType = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook dinner' },
  },
  columns: {
    'column-0': {
      id: 'column-0',
      title: 'Backlog',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: [],
    },
    'column-2': {
      id: 'column-2',
      title: 'In progress',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-0', 'column-1', 'column-2', 'column-3'],
};

type TaskProps = {
  task: TaskType;
  index: number;
};

const Task: FunctionComponent<TaskProps> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <Box
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          sx={{ border: '1px solid lightgrey', padding: 2, mb: 2 }}
        >
          {task.content}
        </Box>
      )}
    </Draggable>
  );
};

type ColumnProps = {
  column: ColumnType;
  tasks: TaskType[];
};

const Column: FunctionComponent<ColumnProps> = ({ column, tasks }) => {
  return (
    <Droppable droppableId={column.id}>
      {(provided, snapshot) => (
        <Box
          sx={{
            margin: 2,
            border: '1px solid lightgrey',
            borderRadius: '2px',
            flex: 1,
            minWidth: 200,
            backgroundColor: snapshot.isDraggingOver
              ? 'primary.main'
              : 'background.paper',
          }}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Typography sx={{ padding: 2 }}>{column.title}</Typography>

          <Box
            sx={{
              padding: 2,
            }}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
          </Box>
          {provided.placeholder}
        </Box>
      )}
    </Droppable>
  );
};

const ProjectBoard: FunctionComponent = () => {
  const [state, setState] = useState(initialData);

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
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
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
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
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
    const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
    return <Column key={columnId} column={column} tasks={tasks} />;
  });

  return (
    <Box sx={{ display: 'flex' }}>
      <DragDropContext onDragEnd={dragEndHandler}>{boards}</DragDropContext>
    </Box>
  );
};

export default ProjectBoard;
