import { useAuth } from 'contexts/auth-context';
import { useProject } from 'contexts/project-context';
import { getAllMyProjects, getTeamMembers } from 'dummyData/dummyData';
import AllProjectsPage from 'pages/AllProjectsPage';
import Home from 'pages/Home';
import IssueDetailPage from 'pages/IssueDetailPage';
import PeoplePage from 'pages/PeoplePage';
import ProjectDetailBoard from 'pages/ProjectDetailBoard';
import ProjectDetailIssues from 'pages/ProjectDetailIssues';
import ProjectDetailSetting from 'pages/ProjectDetailSetting';
import SignIn from 'pages/SignIn';
import YourWorkPage from 'pages/YourWorkPage';
import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const { user } = useAuth();
  const { setAllProjects, setTeamMembers } = useProject();
  useEffect(() => {
    if (user) {
      const projects = getAllMyProjects();
      setAllProjects(projects);
      const teamMembers = getTeamMembers();
      setTeamMembers(teamMembers);
    }
  }, [user, setAllProjects, setTeamMembers]);
  let route = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/projects/:projectId/board"
        element={<ProjectDetailBoard />}
      />
      <Route
        path="/projects/:projectId/issues"
        element={<ProjectDetailIssues />}
      />
      <Route
        path="/projects/:projectId/issues/:issueId"
        element={<IssueDetailPage />}
      />
      <Route
        path="projects/:projectId/settings"
        element={<ProjectDetailSetting />}
      />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
  if (user) {
    route = (
      <Routes>
        <Route
          path="/projects/:projectId/board"
          element={<ProjectDetailBoard />}
        />
        <Route
          path="/projects/:projectId/issues"
          element={<ProjectDetailIssues />}
        />
        <Route
          path="/projects/:projectId/issues/:issueId"
          element={<IssueDetailPage />}
        />
        <Route
          path="projects/:projectId/settings"
          element={<ProjectDetailSetting />}
        />
        <Route path="/projects" element={<AllProjectsPage />} />
        <Route path="/your-work" element={<YourWorkPage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="*" element={<Navigate replace to="/your-work" />} />
      </Routes>
    );
  }
  return route;
}

export default App;
