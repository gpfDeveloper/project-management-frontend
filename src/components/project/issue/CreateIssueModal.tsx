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
  Button,
} from '@mui/material';
import TextEditor from 'components/shared/TextEditor';
import DateSelector from 'components/shared/DateSelector';

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

const people = [
  { value: 'pengfei', label: 'Pengfei Gao' },
  { value: 'user1', label: 'User 1' },
  { value: 'user2', label: 'User 2' },
];

const priorities = [
  { value: 'highest', label: 'Highest' },
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' },
  { value: 'lowest', label: 'Lowest' },
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
  const [reporter, setReporter] = useState('');
  const reporterSelectorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReporter(e.target.value);
  };
  const [assignee, setAssignee] = useState('');
  const assigneeSelectorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAssignee(e.target.value);
  };
  const [priority, setPriority] = useState('');
  const prioritySelectorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriority(e.target.value);
  };
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        ref={(node: Node) => {
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
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="Summary *" size="small" variant="filled" />
            <Box>
              <Typography variant="body2" color="text.secondary" mb={0.6}>
                Description
              </Typography>
              <TextEditor />
            </Box>
          </Box>
          <Box
            sx={{
              mb: 4,
              width: isBelowMd ? '100%' : '50%',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <TextField
              fullWidth
              select
              size="small"
              label="Reporter *"
              value={reporter}
              variant="filled"
              onChange={reporterSelectorHandler}
            >
              {people.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              select
              size="small"
              label="Assignee"
              value={assignee}
              variant="filled"
              onChange={assigneeSelectorHandler}
            >
              {people.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              select
              size="small"
              label="Priority"
              value={priority}
              variant="filled"
              onChange={prioritySelectorHandler}
            >
              {priorities.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <DateSelector />
          </Box>
        </Box>
        <AppBar
          elevation={isScroll ? 0 : 1}
          sx={{
            position: 'sticky',
            p: '1rem 2rem',
            bgcolor: 'background.paper',
            color: 'text.primary',
            top: 'auto',
            bottom: 0,
          }}
        >
          <Box sx={{ ml: 'auto', display: 'flex', gap: 2 }}>
            <Button>Cancel</Button>
            <Button variant="contained">Create</Button>
          </Box>
        </AppBar>
      </Box>
    </Modal>
  );
};

export default CreateIssueModal;
