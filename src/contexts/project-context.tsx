import {
  createContext,
  FunctionComponent,
  ReactNode,
  useState,
  useContext,
} from 'react';
import { ProjectIssueProps, ProjectProps } from 'types/types';

type ProjectCtxProps = {
  allMyProjects: ProjectProps[];
  setAllMyProjects: React.Dispatch<React.SetStateAction<ProjectProps[]>>;
  currentProject: ProjectProps | undefined;
  setCurrentProject: React.Dispatch<
    React.SetStateAction<ProjectProps | undefined>
  >;
  issuesPerProject: ProjectIssueProps[];
  setIssuesPerProject: React.Dispatch<
    React.SetStateAction<ProjectIssueProps[]>
  >;
  currentIssue: ProjectIssueProps | undefined;
  setCurrentIssue: React.Dispatch<
    React.SetStateAction<ProjectIssueProps | undefined>
  >;
};

const ProjectContext = createContext<ProjectCtxProps>({
  allMyProjects: [],
  setAllMyProjects: () => {},
  currentProject: undefined,
  setCurrentProject: () => {},
  issuesPerProject: [],
  setIssuesPerProject: () => {},
  currentIssue: undefined,
  setCurrentIssue: () => {},
});
export default ProjectContext;

type Props = {
  children: ReactNode;
};

export const ProjectProvider: FunctionComponent<Props> = ({ children }) => {
  const [currentProject, setCurrentProject] = useState<
    ProjectProps | undefined
  >();
  const [allMyProjects, setAllMyProjects] = useState<ProjectProps[]>([]);
  const [issuesPerProject, setIssuesPerProject] = useState<ProjectIssueProps[]>(
    []
  );

  const [currentIssue, setCurrentIssue] = useState<
    ProjectIssueProps | undefined
  >();
  return (
    <ProjectContext.Provider
      value={{
        allMyProjects,
        setAllMyProjects,
        currentProject,
        setCurrentProject,
        issuesPerProject,
        setIssuesPerProject,
        currentIssue,
        setCurrentIssue,
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
