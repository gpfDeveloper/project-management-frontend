import { Box, Chip, Paper, Typography, useTheme } from '@mui/material';
import { FunctionComponent } from 'react';
import { getIssuesAssignedToMe, getRecentProjects } from 'dummyData/dummyData';
import { useAuth } from 'contexts/auth-context';
import LinkRouter from 'components/shared/LinkRouter';
import { ProjectProps } from 'types/types';
import ProjectAvatar from '../setting/ProjectAvatar';
import { useNavigate } from 'react-router-dom';

type IssueCountMapType = { [k: string]: number };

type ProjectCardType = {
  project: ProjectProps;
  issueCountMap: IssueCountMapType;
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
        flex: 1,
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
  const grey =
    mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900];
  const { user } = useAuth();
  const projects = getRecentProjects();
  const issues = getIssuesAssignedToMe(user);
  const issuesInProgress = issues.filter(
    (issue) => issue.status === 'IN PROGRESS'
  );
  const issuesToDo = issues.filter((issue) => issue.status === 'TO DO');
  const issueCountMap: IssueCountMapType = {};
  for (const project of projects) {
    issueCountMap[project.id] = 0;
  }
  for (const issue of [...issuesInProgress, ...issuesToDo]) {
    if (issue.projectId in issueCountMap) {
      issueCountMap[issue.projectId] += 1;
    }
  }
  console.log(issueCountMap);

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
          <Box sx={{ display: 'flex', gap: 2, py: 4, flexWrap: 'wrap' }}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                issueCountMap={issueCountMap}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default YourWork;
