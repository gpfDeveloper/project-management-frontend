import React, { FunctionComponent, useState } from 'react';
import { Box, AppBar, useScrollTrigger, Button } from '@mui/material';
import {
  People,
  ProjectIssuePriority,
  ProjectIssueStatus,
} from 'types/project';
import { sampleIssues, samplePeople } from 'dummyData/dummyData';
import IssueDetailHeader from './IssueDetailHeader';
import IssueDetailLeft from './IssueDetailLeft';
import IssueDetailRight from './IssueDetailRight';

type Props = {
  issueId: string;
};

const IssueDetail: FunctionComponent<Props> = ({ issueId }) => {
  const issue = sampleIssues.find((item) => item.id === issueId)!;
  const [summary, setSummary] = useState(issue.summary);
  const [description, setDescription] = useState({
    text: issue.description || '',
  });
  const changeDescriptionHandler = (content: string) => {
    setDescription({ text: content });
  };

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
  const [reporter, setReporter] = useState<People | null>(issue.reporter);
  const reporterSelectorHandler = (
    event: React.SyntheticEvent<Element, Event>,
    value: People | null
  ) => {
    if (!value) setReporter(samplePeople[0]);
    else setReporter(value);
  };
  const [assignee, setAssignee] = useState<People | null>(issue.assignee);
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
  let _due = null;
  if (issue.due) _due = new Date(issue.due);
  const [dueDate, setDueDate] = useState<Date | null>(_due);
  const dueDateSelectorHandler = (date: Date | null) => {
    setDueDate(date);
  };
  const saveHandler = () => {};
  return (
    <Box
      ref={(node: Node) => {
        if (node) setScrollTarget(node);
      }}
    >
      <IssueDetailHeader
        issueId={issue.id}
        projectId={issue.projectId}
        issueType={issue.type}
        scrollTarget={scrollTarget}
      />
      <Box sx={{ mr: 2, display: 'flex', gap: 4 }}>
        <IssueDetailLeft
          summary={summary}
          onChangeSummary={(e) => setSummary(e.target.value)}
          description={description}
          onChangeDescription={changeDescriptionHandler}
        />
        <IssueDetailRight
          allPeople={samplePeople}
          assignee={assignee}
          onChangeAssignee={assigneeSelectorHandler}
          reporter={reporter}
          onChangeReporter={reporterSelectorHandler}
          priority={priority}
          onChangePriority={prioritySelectorHandler}
          issueStatus={issueStatus}
          onChangeIssueStatus={issueStatusSelectorHandler}
          dueDate={dueDate}
          onChangeDueDate={dueDateSelectorHandler}
        />
      </Box>
      <AppBar
        elevation={isScroll ? 0 : 1}
        sx={{
          position: 'fixed',
          p: '1rem 2rem',
          bgcolor: 'background.paper',
          color: 'text.primary',
          top: 'auto',
          bottom: 0,
        }}
      >
        <Box sx={{ ml: 'auto', display: 'flex', gap: 2 }}>
          <Button variant="contained" onClick={saveHandler}>
            Save
          </Button>
        </Box>
      </AppBar>
    </Box>
  );
};

export default IssueDetail;
