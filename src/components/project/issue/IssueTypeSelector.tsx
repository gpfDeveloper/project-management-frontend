import {
  Box,
  TextField,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { FunctionComponent } from 'react';
import BugReportIcon from '@mui/icons-material/BugReport';
import TaskIcon from '@mui/icons-material/Task';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { ProjectIssueType } from 'types/types';

type Props = {
  issueType: ProjectIssueType;
  onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const issueTypes: ProjectIssueType[] = ['Story', 'Task', 'Bug'];

const IssueTypeSelector: FunctionComponent<Props> = ({
  issueType,
  onSelect,
}) => {
  return (
    <Box>
      <TextField
        fullWidth
        select
        size="small"
        label="Issue type"
        value={issueType}
        variant="filled"
        onChange={onSelect}
      >
        {issueTypes.map((option) => {
          let icon = <BookmarkIcon fontSize="small" />;
          let color = 'success.main';
          switch (option) {
            case 'Bug':
              icon = <BugReportIcon fontSize="small" />;
              color = 'error.main';
              break;
            case 'Task':
              icon = <TaskIcon fontSize="small" />;
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

export default IssueTypeSelector;
