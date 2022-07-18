import { FunctionComponent } from 'react';
import { Box, List, Typography, useTheme } from '@mui/material';
import type { ColumnType } from './ProjectBoard';
import type { ProjectIssueProps } from 'types/project';
import { Droppable } from 'react-beautiful-dnd';
import ProjectBoardIssue from './ProjectBoardIssue';

type ColumnProps = {
  column: ColumnType;
  issues: ProjectIssueProps[];
};

const ProjectBoardColumn: FunctionComponent<ColumnProps> = ({
  column,
  issues,
}) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const grey =
    mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900];
  return (
    <Droppable droppableId={column.id}>
      {(provided) => (
        <Box
          sx={{
            pt: 2,
            flex: 1,
            minWidth: 280,
            backgroundColor: grey,
            borderRadius: '4px',
          }}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Typography
            variant="caption"
            sx={{ padding: 2, color: 'text.secondary', fontWeight: 700 }}
          >
            {column.title}
          </Typography>
          <List
            sx={{
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            {issues.map((issue, index) => (
              <ProjectBoardIssue key={issue.id} issue={issue} index={index} />
            ))}
          </List>
          {provided.placeholder}
        </Box>
      )}
    </Droppable>
  );
};

export default ProjectBoardColumn;
