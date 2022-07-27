import AllProjectsPage from 'pages/AllProjectsPage';
import Home from 'pages/Home';
import IssueDetailPage from 'pages/IssueDetailPage';
import People from 'pages/People';
import ProjectDetailBoard from 'pages/ProjectDetailBoard';
import ProjectDetailIssues from 'pages/ProjectDetailIssues';
import ProjectDetailSetting from 'pages/ProjectDetailSetting';
import YourWorkPage from 'pages/YourWorkPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  let route = (
    <Routes>
      <Route path="/" element={<Home />} />
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
      <Route path="/people" element={<People />} />
    </Routes>
  );
  return route;
}

export default App;
