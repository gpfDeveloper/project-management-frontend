import {
  Box,
  TextField,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { FunctionComponent } from 'react';

import { ProjectIssuePriority } from 'types/project';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import DragHandleIcon from '@mui/icons-material/DragHandle';

type Props = {
  issuePriority: ProjectIssuePriority;
  onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const issuePriorities: ProjectIssuePriority[] = [
  'Highest',
  'High',
  'Medium',
  'Low',
  'Lowest',
];

const IssuePrioritySelector: FunctionComponent<Props> = ({
  issuePriority,
  onSelect,
}) => {
  return (
    <Box>
      <TextField
        fullWidth
        select
        size="small"
        label="Priority"
        value={issuePriority}
        variant="filled"
        onChange={onSelect}
      >
        {issuePriorities.map((option) => {
          let icon = <DragHandleIcon fontSize="small" />;
          let color = 'warning.main';
          switch (option) {
            case 'Highest':
              icon = <KeyboardDoubleArrowUpIcon fontSize="small" />;
              color = 'error.main';
              break;
            case 'High':
              icon = <KeyboardArrowUpIcon fontSize="small" />;
              color = 'error.main';
              break;
            case 'Lowest':
              icon = <KeyboardDoubleArrowDownIcon fontSize="small" />;
              color = 'info.main';
              break;
            case 'Low':
              icon = <KeyboardArrowDownIcon fontSize="small" />;
              color = 'info.main';
          }
          let content = (
            <MenuItem key={option} value={option}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ListItemIcon sx={{ color, minWidth: 30 }}>{icon}</ListItemIcon>
                <ListItemText>{option}</ListItemText>
              </Box>
            </MenuItem>
          );
          return content;
        })}
      </TextField>
    </Box>
  );
};

export default IssuePrioritySelector;
