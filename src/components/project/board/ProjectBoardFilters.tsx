import {
  Box,
  TextField,
  InputAdornment,
  AvatarGroup,
  Tooltip,
  Chip,
  Button,
} from '@mui/material';
import React, { FunctionComponent } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import StringAvatar from 'components/shared/StringAvatar';
import { AssigneeAvatarType } from './ProjectBoard';

type Props = {
  filterStr: string;
  onChangeFilterStr: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isOnlyMyIssue: boolean;
  onClickOnlyMyIssue: () => void;
  isRecentUpdated: boolean;
  onClickRecentUpdated: () => void;
  assignees: AssigneeAvatarType[];
  onClickAssignee: (email: string) => void;
  onClearAll: () => void;
  showClearAll: boolean;
};

type AssigneeAvatarProps = {
  isSelected: boolean;
  name: string;
  email: string;
  onClick: (email: string) => void;
};
const AssigneeAvatar: FunctionComponent<AssigneeAvatarProps> = ({
  isSelected,
  name,
  email,
  onClick,
}) => {
  return (
    <Tooltip title={name}>
      <Box
        onClick={onClick.bind(null, email)}
        sx={{
          mr: -1,
          '&: hover': {
            transform: 'translateY(-4px)',
            cursor: 'pointer',
          },
          ...(isSelected && {
            borderColor: 'primary.main',
            borderStyle: 'solid',
            borderWidth: 3,
            borderRadius: '100%',
          }),
        }}
      >
        <StringAvatar name={name} />
      </Box>
    </Tooltip>
  );
};

const ProjectBoardFilters: FunctionComponent<Props> = ({
  filterStr,
  onChangeFilterStr,
  isOnlyMyIssue,
  onClickOnlyMyIssue,
  isRecentUpdated,
  onClickRecentUpdated,
  assignees,
  onClickAssignee,
  onClearAll,
  showClearAll,
}) => {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <TextField
        size="small"
        value={filterStr}
        onChange={onChangeFilterStr}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <Box>
        <AvatarGroup>
          {assignees.map((item) => (
            <AssigneeAvatar
              key={item.email}
              name={item.name}
              email={item.email}
              isSelected={item.isSelected}
              onClick={onClickAssignee}
            />
          ))}
        </AvatarGroup>
      </Box>
      <Box sx={{ display: 'flex', gap: 1, color: 'text.secondary' }}>
        <Chip
          label="Only My Issues"
          variant={isOnlyMyIssue ? 'filled' : 'outlined'}
          onClick={onClickOnlyMyIssue}
        />
        <Chip
          label="Recently Updated"
          variant={isRecentUpdated ? 'filled' : 'outlined'}
          onClick={onClickRecentUpdated}
        />
        {showClearAll && (
          <Button color="inherit" onClick={onClearAll}>
            Clear all
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ProjectBoardFilters;
