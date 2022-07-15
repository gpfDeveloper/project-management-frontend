import AllProjects from 'pages/AllProjects';
import Home from 'pages/Home';
import People from 'pages/People';
import ProjectDetailBoard from 'pages/ProjectDetailBoard';
import ProjectDetailIssues from 'pages/ProjectDetailIssues';
import YourWork from 'pages/YourWork';
import { Route, Routes } from 'react-router-dom';

function App() {
  let route = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id/board" element={<ProjectDetailBoard />} />
      <Route path="/project/:id/issues" element={<ProjectDetailIssues />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/your-work" element={<YourWork />} />
      <Route path="/people" element={<People />} />
    </Routes>
  );
  return route;
}

export default App;
