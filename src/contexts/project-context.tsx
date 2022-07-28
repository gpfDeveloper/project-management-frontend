import {
  createContext,
  FunctionComponent,
  ReactNode,
  useState,
  useContext,
} from 'react';
import { ProjectIssueProps, ProjectProps, TeamMember } from 'types/types';

type ProjectCtxProps = {
  myProjects: ProjectProps[];
  setMyProjects: React.Dispatch<React.SetStateAction<ProjectProps[]>>;
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
  myProjects: [],
  setMyProjects: () => {},
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
  const [myProjects, setMyProjects] = useState<ProjectProps[]>([]);
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
        myProjects,
        setMyProjects,
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
