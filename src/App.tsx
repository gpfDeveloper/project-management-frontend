import AllProjects from 'pages/AllProjects';
import Home from 'pages/Home';
import People from 'pages/People';
import ProjectDetail from 'pages/ProjectDetail';
import YourWork from 'pages/YourWork';
import { Route, Routes } from 'react-router-dom';

function App() {
  let route = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
      <Route path="/projects" element={<AllProjects />} />
      <Route path="/your-work" element={<YourWork />} />
      <Route path="/people" element={<People />} />
    </Routes>
  );
  return route;
}

export default App;
