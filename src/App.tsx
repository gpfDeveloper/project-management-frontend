import AllProjects from 'pages/AllProjects';
import Home from 'pages/Home';
import IssueDetail from 'pages/IssueDetail';
import People from 'pages/People';
import ProjectDetailBoard from 'pages/ProjectDetailBoard';
import ProjectDetailIssues from 'pages/ProjectDetailIssues';
import YourWork from 'pages/YourWork';
import { Route, Routes } from 'react-router-dom';

function App() {
  let route = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:id/board" element={<ProjectDetailBoard />} />
      <Route path="/projects/:id/issues" element={<ProjectDetailIssues />} />
      <Route path="/projects/:id/issues/:id" element={<IssueDetail />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/your-work" element={<YourWork />} />
      <Route path="/people" element={<People />} />
    </Routes>
  );
  return route;
}

export default App;
