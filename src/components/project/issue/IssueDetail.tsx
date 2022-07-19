import React, { FunctionComponent, useState } from 'react';
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  MenuItem,
  AppBar,
  useScrollTrigger,
  Button,
} from '@mui/material';
import TextEditor from 'components/shared/TextEditor';
import DateSelector from 'components/shared/DateSelector';
import { ProjectIssuePriority } from 'types/project';
import IssuePrioritySelector from 'components/project/issue/IssuePrioritySelector';
import IssueDetailHeader from '../issue/IssueDetailHeader';
import { sampleIssues } from 'dummyData/dummyData';

const people = [
  { value: 'pengfei', label: 'Pengfei Gao' },
  { value: 'user1', label: 'User 1' },
  { value: 'user2', label: 'User 2' },
];

type Props = {
  issueId: string;
};

const IssueDetail: FunctionComponent<Props> = ({ issueId }) => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down('md'));
  const issue = sampleIssues.find((item) => item.id === issueId)!;

  const [scrollTarget, setScrollTarget] = useState<Node | Window | undefined>();
  const isScroll = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: scrollTarget,
  });

  const [reporter, setReporter] = useState('');
  const reporterSelectorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReporter(e.target.value);
  };
  const [assignee, setAssignee] = useState('');
  const assigneeSelectorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAssignee(e.target.value);
  };
  const [priority, setPriority] = useState<ProjectIssuePriority>('Medium');
  const prioritySelectorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriority(e.target.value as ProjectIssuePriority);
  };
  const cancelHandler = () => {};
  const saveHandler = () => {};
  return (
    <Box>
      <Box
        ref={(node: Node) => {
          if (node) setScrollTarget(node);
        }}

        // sx={{
        //   position: 'absolute',
        //   top: '50%',
        //   left: '50%',
        //   transform: 'translate(-50%, -50%)',
        //   width: '90%',
        //   height: 640,
        //   bgcolor: 'background.paper',
        //   boxShadow: 4,
        //   overflowY: 'auto',
        // }}
      >
        <IssueDetailHeader
          issueId={issue.id}
          projectId={issue.projectId}
          issueType={issue.type}
          scrollTarget={scrollTarget}
        />
        <Box
          sx={{ p: '0 2rem', display: 'flex', flexDirection: 'column', gap: 3 }}
        >
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
              label="Reporter"
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
            <IssuePrioritySelector
              issuePriority={priority}
              onSelect={prioritySelectorHandler}
            />
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
            <Button onClick={cancelHandler}>Cancel</Button>
            <Button variant="contained" onClick={saveHandler}>
              Save
            </Button>
          </Box>
        </AppBar>
      </Box>
    </Box>
  );
};

export default IssueDetail;
