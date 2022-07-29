import {
  createContext,
  FunctionComponent,
  ReactNode,
  useState,
  useContext,
} from 'react';
import { ProjectIssueProps, ProjectProps, TeamMember } from 'types/types';

type ProjectCtxProps = {
  allProjects: ProjectProps[];
  setAllProjects: React.Dispatch<React.SetStateAction<ProjectProps[]>>;
  currentProject: ProjectProps | undefined;
  setCurrentProject: React.Dispatch<
    React.SetStateAction<ProjectProps | undefined>
  >;
  issuesPerProject: ProjectIssueProps[];
  setIssuesPerProject: React.Dispatch<
    React.SetStateAction<ProjectIssueProps[]>
  >;
  issuesAssignedToMe: ProjectIssueProps[];
  setIssuesAssignedToMe: React.Dispatch<
    React.SetStateAction<ProjectIssueProps[]>
  >;
  currentIssue: ProjectIssueProps | undefined;
  setCurrentIssue: React.Dispatch<
    React.SetStateAction<ProjectIssueProps | undefined>
  >;
  teamMembers: TeamMember[];
  setTeamMembers: React.Dispatch<React.SetStateAction<TeamMember[]>>;
};

const ProjectContext = createContext<ProjectCtxProps>({
  allProjects: [],
  setAllProjects: () => {},
  currentProject: undefined,
  setCurrentProject: () => {},
  issuesPerProject: [],
  setIssuesPerProject: () => {},
  issuesAssignedToMe: [],
  setIssuesAssignedToMe: () => {},
  currentIssue: undefined,
  setCurrentIssue: () => {},
  teamMembers: [],
  setTeamMembers: () => {},
});
export default ProjectContext;

type Props = {
  children: ReactNode;
};

export const ProjectProvider: FunctionComponent<Props> = ({ children }) => {
  const [currentProject, setCurrentProject] = useState<
    ProjectProps | undefined
  >();
  const [allProjects, setAllProjects] = useState<ProjectProps[]>([]);
  const [issuesPerProject, setIssuesPerProject] = useState<ProjectIssueProps[]>(
    []
  );
  const [issuesAssignedToMe, setIssuesAssignedToMe] = useState<
    ProjectIssueProps[]
  >([]);
  const [currentIssue, setCurrentIssue] = useState<
    ProjectIssueProps | undefined
  >();
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  return (
    <ProjectContext.Provider
      value={{
        allProjects,
        setAllProjects,
        currentProject,
        setCurrentProject,
        issuesPerProject,
        setIssuesPerProject,
        issuesAssignedToMe,
        setIssuesAssignedToMe,
        currentIssue,
        setCurrentIssue,
        teamMembers,
        setTeamMembers,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  const ctx = useContext(ProjectContext);
  return ctx;
};
