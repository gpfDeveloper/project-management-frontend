import { ProjectProps } from 'types/types';

export const getRecentProjects = (projects: ProjectProps[]) => {
  const recentProjects = projects.sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
  return recentProjects.slice(0, 5);
};
