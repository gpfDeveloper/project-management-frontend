import { useState } from 'react';
import { Box, Button, MenuItem, Menu, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/Check';

import { ProjectIssueStatus } from 'types/project';

type Props = {
  issueStatus: ProjectIssueStatus;
  onSelect: (status: ProjectIssueStatus) => void;
};

const AllissueStatus: ProjectIssueStatus[] = ['TO DO', 'IN PROGRESS', 'DONE'];
type Color =
  | 'inherit'
  | 'primary'
  | 'success'
  | 'secondary'
  | 'error'
  | 'info'
  | 'warning'
  | undefined;
const ColorMap: { [k: string]: Color } = {
  'TO DO': 'inherit',
  'IN PROGRESS': 'primary',
  DONE: 'success',
};

const IssueStatusSelector: FunctionComponent<Props> = ({
  issueStatus,
  onSelect,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const selectHandler = (status: ProjectIssueStatus) => {
    setAnchorEl(null);
    onSelect(status);
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <Box sx={{ color: 'text.secondary' }}>
        <Button
          variant="contained"
          color={ColorMap[issueStatus]}
          onClick={handleClick}
        >
          {issueStatus} <ExpandMoreIcon />
        </Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {AllissueStatus.map((item) => {
            let color = 'text.primary';
            if (item === 'IN PROGRESS') color = 'primary.main';
            if (item === 'DONE') color = 'success.main';
            return (
              <MenuItem key={item} onClick={selectHandler.bind(null, item)}>
                <Typography variant="caption" fontWeight={700} color={color}>
                  {item}
                </Typography>
              </MenuItem>
            );
          })}
        </Menu>
      </Box>
      {issueStatus === 'DONE' && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
          <CheckIcon color="success" />
          Done
        </Box>
      )}
    </Box>
  );
};

export default IssueStatusSelector;
