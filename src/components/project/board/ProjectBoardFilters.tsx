import {
  Box,
  TextField,
  InputAdornment,
  AvatarGroup,
  Tooltip,
  Chip,
  Button,
} from '@mui/material';
import { FunctionComponent } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import StringAvatar from 'components/shared/StringAvatar';

const ProjectBoardFilters: FunctionComponent = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <TextField
        size="small"
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
          <Tooltip title={'Pengfei Gao'}>
            <Box sx={{ mr: -1 }}>
              <StringAvatar name={'Pengfei Gao'} />
            </Box>
          </Tooltip>
          <Tooltip title={'John Doe'}>
            <Box
              sx={{
                mr: -1,
                borderColor: 'primary.main',
                borderStyle: 'solid',
                borderWidth: 3,
                borderRadius: '100%',
              }}
            >
              <StringAvatar name={'John Doe'} />
            </Box>
          </Tooltip>
          <Tooltip title={'Terry Smith'}>
            <Box>
              <StringAvatar name={'Terry Smith'} />
            </Box>
          </Tooltip>
        </AvatarGroup>
      </Box>
      <Box sx={{ display: 'flex', gap: 1, color: 'text.secondary' }}>
        <Chip label="Only My Issues" />
        <Chip label="Recently Updated" />
        <Button color="inherit">Clear all</Button>
      </Box>
    </Box>
  );
};

export default ProjectBoardFilters;
