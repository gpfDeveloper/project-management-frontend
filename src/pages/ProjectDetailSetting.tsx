import { Box } from '@mui/material';
import { ProjectLayout } from 'components/layout/ProjectLayout';
import { useProject } from 'contexts/project-context';
import { FunctionComponent, useEffect, useState } from 'react';
import { getProject } from 'dummyData/dummyData';
import { useParams } from 'react-router-dom';
import ProjectSetting from 'components/project/setting/ProjectSetting';
import ProjectBreadcrumbs from 'components/shared/ProjectBreadcrumbs';

const ProjectDetailSetting: FunctionComponent = () => {
  const { setCurrentProject } = useProject();
  const [loading, setLoading] = useState(true);
  const { projectId } = useParams();
  useEffect(() => {
    if (projectId) {
      const project = getProject(projectId);
      setCurrentProject(project);
      setLoading(false);
    }
  }, [projectId, setCurrentProject]);
  return (
    <ProjectLayout>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <ProjectBreadcrumbs />
        {!loading && <ProjectSetting />}
      </Box>
    </ProjectLayout>
  );
};

export default ProjectDetailSetting;
