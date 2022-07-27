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
  ProjectIssuePriority,
  ProjectIssueType,
  ProjectProps,
} from 'types/types';
import IssueTypeSelector from './IssueTypeSelector';
import IssuePrioritySelector from './IssuePrioritySelector';
import { getAllMyProjects, samplePeople } from 'dummyData/dummyData';
import type { People } from 'types/types';
import PeopleSelector from 'components/shared/PeopleSelector';
import ProjectSelector from 'components/shared/ProjectSelector';
import { useProject } from 'contexts/project-context';

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

  const { myProjects, currentProject, setMyProjects } = useProject();
  useEffect(() => {
    const myProjects = getAllMyProjects();
    setMyProjects(myProjects);
    setSelectedProject(currentProject || null);
  }, [setMyProjects, currentProject]);

  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
    null
  );
  const selectProjectHandler = (
    event: React.SyntheticEvent<Element, Event>,
    project: ProjectProps | null
  ) => {
    setSelectedProject(project);
  };
  const hasError = Boolean(!selectedProject);

  const [issueType, setIssueType] = useState<ProjectIssueType>('Story');
  const issueTypeSelectorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIssueType(e.target.value as ProjectIssueType);
  };
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState({
    text: '',
  });
  const changeDescriptionHandler = (content: string) => {
    setDescription({ text: content });
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
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const cancelHandler = () => {
    onClose();
  };
  const createHandler = () => {
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
                options={myProjects}
                project={selectedProject}
                onSelect={selectProjectHandler}
                error={hasError}
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
              onChange={(e) => setSummary(e.target.value)}
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
              options={samplePeople}
              label="Reporter"
            />
            <PeopleSelector
              people={assignee}
              onSelect={assigneeSelectorHandler}
              options={samplePeople}
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
