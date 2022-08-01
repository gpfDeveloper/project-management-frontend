import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  Modal,
  Divider,
  AppBar,
  useScrollTrigger,
  Button,
} from '@mui/material';
import TextEditor from 'components/shared/TextEditor';
import DateSelector from 'components/shared/DateSelector';
import {
  History,
  ProjectIssuePriority,
  ProjectIssueProps,
  ProjectIssueType,
  ProjectProps,
} from 'types/types';
import IssueTypeSelector from './IssueTypeSelector';
import IssuePrioritySelector from './IssuePrioritySelector';
import type { TeamMember } from 'types/types';
import PeopleSelector from 'components/shared/PeopleSelector';
import ProjectSelector from 'components/shared/ProjectSelector';
import { useProject } from 'contexts/project-context';
import { v4 as uuid } from 'uuid';
import {
  addHistory,
  createIssue,
  sampleTeamMembers,
} from 'dummyData/dummyData';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'contexts/auth-context';

type Props = {
  open: boolean;
  onClose: () => void;
};

const CreateIssueModal: FunctionComponent<Props> = ({ open, onClose }) => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const [scrollTarget, setScrollTarget] = useState<Node | Window | undefined>();
  const isScroll = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: scrollTarget,
  });

  const {
    allProjects,
    currentProject,
    teamMembers,
    issuesPerProject,
    setIssuesPerProject,
    setIssuesAssignedToMe,
  } = useProject();

  const { user } = useAuth();

  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
    null
  );
  useEffect(() => {
    if (currentProject) {
      setSelectedProject(currentProject);
      setReporter(currentProject.lead);
      setAssignee(currentProject.lead);
    } else {
      setReporter(sampleTeamMembers[0]);
      setAssignee(sampleTeamMembers[0]);
    }
  }, [currentProject]);
  const selectProjectHandler = (
    event: React.SyntheticEvent<Element, Event>,
    project: ProjectProps | null
  ) => {
    setSelectedProject(project);
  };
  const errorProjectSelector = Boolean(!selectedProject);

  const [issueType, setIssueType] = useState<ProjectIssueType>('Story');
  const issueTypeSelectorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIssueType(e.target.value as ProjectIssueType);
  };
  const [summary, setSummary] = useState('');
  const [isSummaryTouched, setIsSummaryTouched] = useState(false);
  const changeSummaryHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSummaryTouched(true);
    setSummary(e.target.value);
  };
  const summaryError = summary.length === 0 || summary.length > 255;

  const [description, setDescription] = useState({
    text: '',
  });
  const changeDescriptionHandler = (content: string) => {
    setDescription({ text: content });
  };

  const hasError = errorProjectSelector || summaryError;

  const [reporter, setReporter] = useState<TeamMember | null>(null);
  const reporterSelectorHandler = (
    event: React.SyntheticEvent<Element, Event>,
    value: TeamMember | null
  ) => {
    if (!value) setReporter(teamMembers[0]);
    else setReporter(value);
  };
  const [assignee, setAssignee] = useState<TeamMember | null>(null);
  const assigneeSelectorHandler = (
    event: React.SyntheticEvent<Element, Event>,
    value: TeamMember | null
  ) => {
    if (!value) setAssignee(teamMembers[0]);
    else setAssignee(value);
  };
  const [priority, setPriority] = useState<ProjectIssuePriority>('Medium');
  const prioritySelectorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriority(e.target.value as ProjectIssuePriority);
  };
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const cancelHandler = () => {
    onClose();
  };
  const createHandler = () => {
    const now = new Date().toISOString();
    const issue: ProjectIssueProps = {
      id: uuid(),
      projectId: selectedProject!.id,
      type: issueType,
      summary,
      description: description.text,
      assignee: assignee!,
      reporter: reporter!,
      priority,
      status: 'TO DO',
      createdAt: now,
      updatedAt: now,
    };
    if (dueDate) {
      issue.dueAt = dueDate.toISOString();
    }
    if (issuesPerProject) {
      setIssuesPerProject([...issuesPerProject, issue]);
    }
    if (user!.email === assignee!.email) {
      setIssuesAssignedToMe((prev) => [issue, ...prev]);
    }
    createIssue(issue);
    navigate(`/projects/${selectedProject!.id}/board`);
    setSummary('');
    setDueDate(null);
    setIsSummaryTouched(false);
    const history: History = {
      id: uuid(),
      issueId: issue.id,
      createdAt: now,
      field: 'Issue',
      updatedBy: user!,
    };
    addHistory(history);
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
          <Box
            sx={{
              width: isBelowMd ? '100%' : '50%',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Box>
              <ProjectSelector
                options={allProjects}
                project={selectedProject}
                onSelect={selectProjectHandler}
                error={errorProjectSelector}
              />
            </Box>
            <IssueTypeSelector
              issueType={issueType}
              onSelect={issueTypeSelectorHandler}
            />
          </Box>
          <Divider />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              multiline
              label="Summary *"
              size="small"
              variant="filled"
              value={summary}
              onChange={changeSummaryHandler}
              error={summaryError && isSummaryTouched}
              helperText={
                summaryError &&
                isSummaryTouched &&
                'Summary should have 1~255 characters.'
              }
            />
            <Box>
              <Typography variant="body2" color="text.secondary" mb={0.6}>
                Description
              </Typography>
              <TextEditor
                placeholder="Add a description..."
                editorState={description}
                onChange={changeDescriptionHandler}
              />
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
            <PeopleSelector
              people={reporter}
              onSelect={reporterSelectorHandler}
              options={teamMembers}
              label="Reporter"
            />
            <PeopleSelector
              people={assignee}
              onSelect={assigneeSelectorHandler}
              options={teamMembers}
              label="Assignee"
            />
            <IssuePrioritySelector
              issuePriority={priority}
              onSelect={prioritySelectorHandler}
            />
            <DateSelector
              date={dueDate}
              onChange={(date) => setDueDate(date)}
              label="Due date"
            />
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
            <Button
              variant="contained"
              onClick={createHandler}
              disabled={hasError}
            >
              Create
            </Button>
          </Box>
        </AppBar>
      </Box>
    </Modal>
  );
};

export default CreateIssueModal;
