import React, { FunctionComponent, useState } from 'react';
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  MenuItem,
  Modal,
  Divider,
  AppBar,
  useScrollTrigger,
} from '@mui/material';

const projects = [
  {
    value: 'project1',
    label: 'Sample Project',
  },
  {
    value: 'project2',
    label: 'Sample Project 2',
  },
  {
    value: 'project3',
    label: 'Sample Project 3',
  },
];

const issueTypes = [
  { value: 'task', label: 'Task' },
  { value: 'story', label: 'Story' },
  { value: 'bug', label: 'Bug' },
];

type Props = {
  open: boolean;
  onClose: () => void;
};

const CreateIssueModal: FunctionComponent<Props> = ({ open, onClose }) => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down('md'));

  const [scrollTarget, setScrollTarget] = useState<Node | Window | undefined>();
  const isScroll = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: scrollTarget,
  });

  const [projectTitle, setProjectTitle] = useState('');
  const projectTitleSelectorHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProjectTitle(e.target.value);
  };
  const [issueType, setIssueType] = useState('');
  const issueTypeSelectorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIssueType(e.target.value);
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        ref={(node: undefined) => {
          if (node) setScrollTarget(node);
        }}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: isBelowMd ? '90%' : 800,
          height: 640,
          bgcolor: 'background.paper',
          boxShadow: 4,
          overflowY: 'auto',
        }}
      >
        <AppBar
          elevation={isScroll ? 1 : 0}
          sx={{
            position: 'sticky',
            p: '1rem 2rem',
            bgcolor: 'background.paper',
            color: 'text.primary',
          }}
        >
          <Typography variant="h5">Create issue</Typography>
        </AppBar>
        <Box
          sx={{ p: '0 2rem', display: 'flex', flexDirection: 'column', gap: 3 }}
        >
          <Box sx={{ width: isBelowMd ? '100%' : '50%' }}>
            <Box>
              <TextField
                fullWidth
                select
                size="small"
                label="Project *"
                value={projectTitle}
                variant="filled"
                onChange={projectTitleSelectorHandler}
              >
                {projects.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box mt={2}>
              <TextField
                fullWidth
                select
                size="small"
                label="Issue type *"
                value={issueType}
                variant="filled"
                onChange={issueTypeSelectorHandler}
              >
                {issueTypes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Box>
          <Divider />
          <TextField label="Summary *" size="small" variant="filled" />
          <Box mt={100}>aaa</Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateIssueModal;
