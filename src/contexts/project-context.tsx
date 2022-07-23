import {
  createContext,
  FunctionComponent,
  ReactNode,
  useState,
  useContext,
} from 'react';
import { ProjectIssueProps } from 'types/types';

type ProjectProps = {
  allIssues: ProjectIssueProps[];
  setAllIssues: React.Dispatch<React.SetStateAction<ProjectIssueProps[]>>;
  currentIssue: ProjectIssueProps | undefined;
  setCurrentIssue: React.Dispatch<
    React.SetStateAction<ProjectIssueProps | undefined>
  >;
};

const ProjectContext = createContext<ProjectProps>({
  allIssues: [],
  setAllIssues: () => {},
  currentIssue: undefined,
  setCurrentIssue: () => {},
});
export default ProjectContext;

type Props = {
  children: ReactNode;
};

export const ProjectProvider: FunctionComponent<Props> = ({ children }) => {
  const [allIssues, setAllIssues] = useState<ProjectIssueProps[]>([]);
  const [currentIssue, setCurrentIssue] = useState<
    ProjectIssueProps | undefined
  >();
  return (
    <ProjectContext.Provider
      value={{
        allIssues,
        setAllIssues,
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
