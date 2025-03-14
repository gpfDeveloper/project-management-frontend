import { Box } from '@mui/material';
import { ProjectLayout } from 'components/layout/ProjectLayout';
import IssueDetailWrapper from 'components/project/issue/IssueDetailWrapper';
import { FunctionComponent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getIssue, getProject } from 'dummyData/dummyData';
import { useProject } from 'contexts/project-context';

const IssueDetailPage: FunctionComponent = () => {
  const location = useLocation();
  // pathname: /projects/project1/issues/773096cf-9680-4a2a-9f4b-28e1db909392
  const paths = location.pathname.split('/');
  const issueId = paths[4];
  const { setCurrentIssue, setCurrentProject } = useProject();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const issue = getIssue(issueId);
    const project = getProject(issue!.projectId);
    setCurrentIssue(issue);
    setCurrentProject(project);
    setLoading(false);
  }, [issueId, setCurrentIssue, setCurrentProject]);

  return (
    <ProjectLayout>
      <Box>{!loading && <IssueDetailWrapper />}</Box>
    </ProjectLayout>
  );
};

export default IssueDetailPage;
