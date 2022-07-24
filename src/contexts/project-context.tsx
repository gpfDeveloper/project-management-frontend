import {
  createContext,
  FunctionComponent,
  ReactNode,
  useState,
  useContext,
} from 'react';
import { ProjectIssueProps } from 'types/types';

type ProjectProps = {
  issuesPerProject: ProjectIssueProps[];
  setIssuesPerProject: React.Dispatch<
    React.SetStateAction<ProjectIssueProps[]>
  >;
  currentIssue: ProjectIssueProps | undefined;
  setCurrentIssue: React.Dispatch<
    React.SetStateAction<ProjectIssueProps | undefined>
  >;
};

const ProjectContext = createContext<ProjectProps>({
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
  const [issuesPerProject, setIssuesPerProject] = useState<ProjectIssueProps[]>(
    []
  );
  const [currentIssue, setCurrentIssue] = useState<
    ProjectIssueProps | undefined
  >();
  return (
    <ProjectContext.Provider
      value={{
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
