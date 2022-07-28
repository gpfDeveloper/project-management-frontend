import { ProjectProps } from 'types/types';

export const getRecentProjects = (projects: ProjectProps[]) => {
  const recentProjects = projects.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return recentProjects.slice(0, 5);
};
