import {
  Box,
  Chip,
  Paper,
  Typography,
  useTheme,
  MenuItem,
  Divider,
} from '@mui/material';
import { FunctionComponent } from 'react';
import LinkRouter from 'components/shared/LinkRouter';
import { ProjectProps, ProjectIssueProps } from 'types/types';
import ProjectAvatar from '../setting/ProjectAvatar';
import { useNavigate } from 'react-router-dom';
import IssueTypeIcon from '../issue/IssueTypeIcon';
import { useProject } from 'contexts/project-context';
import { getRecentProjects } from 'utils/utils';

type IssueCountMapType = { [k: string]: number };

type ProjectCardType = {
  project: ProjectProps;
  issueCountMap: IssueCountMapType;
};

type ProjectIdNameMapType = { [k: string]: string };

type IssueMenuItemProps = {
  issue: ProjectIssueProps;
  projectIdNameMap: ProjectIdNameMapType;
  onClick: () => void;
};

const IssueMenuItem: FunctionComponent<IssueMenuItemProps> = ({
  issue,
  projectIdNameMap,
  onClick,
}) => {
  return (
    <MenuItem
      onClick={onClick}
      sx={{ pl: 0, whiteSpace: 'pre-wrap', maxWidth: 960 }}
    >
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <IssueTypeIcon issueType={issue.type} />
        <Box>
          <Typography variant="body2">{issue.summary}</Typography>
          <Typography variant="caption" color="text.secondary">
            {projectIdNameMap[issue.projectId]}
          </Typography>
        </Box>
      </Box>
    </MenuItem>
  );
};

const ProjectCard: FunctionComponent<ProjectCardType> = ({
  project,
  issueCountMap,
}) => {
  const navigate = useNavigate();
  return (
    <Paper
      sx={{
        p: 2,
        minWidth: 240,
        maxWidth: 400,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        cursor: 'pointer',
      }}
      onClick={() => navigate(`/projects/${project.id}/board`)}
    >
      <ProjectAvatar name={project.avatar} />
      <Typography fontWeight={500}>{project.name}</Typography>
      <Typography variant="body2" color="text.secondary">
        {project.type}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography>My open issues</Typography>
        <Chip label={issueCountMap[project.id]} />
      </Box>
    </Paper>
  );
};

const YourWork: FunctionComponent = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const grey = mode === 'light' ? theme.palette.grey[50] : 'inherit';
  const { myProjects, issuesAssignedToMe } = useProject();
  const navigate = useNavigate();
  const recentProjects = getRecentProjects(myProjects);
  const issuesInProgress = issuesAssignedToMe.filter(
    (issue) => issue.status === 'IN PROGRESS'
  );
  const issuesToDo = issuesAssignedToMe.filter(
    (issue) => issue.status === 'TO DO'
  );
  const numberOfIssues = issuesInProgress.length + issuesToDo.length;
  const issueCountMap: IssueCountMapType = {};
  for (const project of recentProjects) {
    issueCountMap[project.id] = 0;
  }
  for (const issue of [...issuesInProgress, ...issuesToDo]) {
    if (issue.projectId in issueCountMap) {
      issueCountMap[issue.projectId] += 1;
    }
  }
  const projectIdNameMap: ProjectIdNameMapType = {};
  for (const project of myProjects) {
    projectIdNameMap[project.id] = project.name;
  }

  const clickIssueHandler = (issue: ProjectIssueProps) => {
    navigate(`/projects/${issue.projectId}/issues/${issue.id}`);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Typography variant="h5">Your work</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h6">Recent Projects</Typography>
          <LinkRouter to="/projects">View all projects</LinkRouter>
        </Box>
        <Box sx={{ backgroundColor: grey }}>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              py: 4,
              flexWrap: 'wrap',
              justifyContent: { xs: 'center', sm: 'start' },
            }}
          >
            {recentProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                issueCountMap={issueCountMap}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography variant="h6">
          Assigned to me <Chip label={numberOfIssues} />
        </Typography>
        <Divider />
        <Box>
          <Typography
            key={1}
            variant="caption"
            color="text.secondary"
            fontWeight={700}
          >
            IN PROGRESS
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 1 }}>
            {issuesInProgress.map((issue) => (
              <IssueMenuItem
                key={issue.id}
                issue={issue}
                projectIdNameMap={projectIdNameMap}
                onClick={clickIssueHandler.bind(null, issue)}
              />
            ))}
          </Box>
          <Typography
            key={1}
            variant="caption"
            color="text.secondary"
            fontWeight={700}
          >
            TO DO
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 1 }}>
            {issuesToDo.map((issue) => (
              <IssueMenuItem
                key={issue.id}
                issue={issue}
                projectIdNameMap={projectIdNameMap}
                onClick={clickIssueHandler.bind(null, issue)}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default YourWork;
