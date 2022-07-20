import React, { FunctionComponent, useState } from 'react';
import {
  Box,
  useTheme,
  useMediaQuery,
  Modal,
  Divider,
  AppBar,
  useScrollTrigger,
  Button,
} from '@mui/material';
import {
  People,
  ProjectIssuePriority,
  ProjectIssueStatus,
} from 'types/project';
import { sampleIssues, samplePeople } from 'dummyData/dummyData';
import EditIssueModalHeader from './EditIssueModalHeader';
import EditIssueModalLeft from './EditIssueModalLeft';
import EditIssueModalRight from './EditIssueModalRight';

type Props = {
  issueId: string;
  open: boolean;
  onClose: () => void;
};

const EditIssueModal: FunctionComponent<Props> = ({
  open,
  onClose,
  issueId,
}) => {
  const issue = sampleIssues.find((item) => item.id === issueId)!;
  const [summary, setSummary] = useState(issue.summary);

  const [scrollTarget, setScrollTarget] = useState<Node | Window | undefined>();
  const isScroll = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: scrollTarget,
  });

  const [issueStatus, setIssueStatus] = useState<ProjectIssueStatus>(
    issue.status
  );
  const issueStatusSelectorHandler = (status: ProjectIssueStatus) => {
    setIssueStatus(status);
  };
  const [reporter, setReporter] = useState<People | null>(samplePeople[1]);
  const reporterSelectorHandler = (
    event: React.SyntheticEvent<Element, Event>,
    value: People | null
  ) => {
    if (!value) setReporter(samplePeople[0]);
    else setReporter(value);
  };
  const [assignee, setAssignee] = useState<People | null>(samplePeople[0]);
  const assigneeSelectorHandler = (
    event: React.SyntheticEvent<Element, Event>,
    value: People | null
  ) => {
    if (!value) setAssignee(samplePeople[0]);
    else setAssignee(value);
  };
  const [priority, setPriority] = useState<ProjectIssuePriority>('Medium');
  const prioritySelectorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriority(e.target.value as ProjectIssuePriority);
  };
  const cancelHandler = () => {
    onClose();
  };
  const saveHandler = () => {
    onClose();
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
          width: '90%',
          bgcolor: 'background.paper',
          boxShadow: 4,
          overflowY: 'auto',
        }}
      >
        <EditIssueModalHeader
          issueId={issue.id}
          projectId={issue.projectId}
          issueType={issue.type}
          scrollTarget={scrollTarget}
          onClose={onClose}
        />
        <Box sx={{ p: '0 2rem', display: 'flex', gap: 4 }}>
          <EditIssueModalLeft
            summary={summary}
            onChangeSummary={(e) => setSummary(e.target.value)}
            description=""
          />
          <EditIssueModalRight
            allPeople={samplePeople}
            assignee={assignee}
            onChangeAssignee={assigneeSelectorHandler}
            reporter={reporter}
            onChangeReporter={reporterSelectorHandler}
            priority={priority}
            onChangePriority={prioritySelectorHandler}
            issueStatus={issueStatus}
            onChangeIssueStatus={issueStatusSelectorHandler}
          />
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
    </Modal>
  );
};

export default EditIssueModal;
