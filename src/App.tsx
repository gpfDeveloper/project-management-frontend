import Home from 'pages/Home';
import SampleProject from 'pages/SampleProject';
import { Route, Routes } from 'react-router-dom';

function App() {
  let route = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sample-project" element={<SampleProject />} />
    </Routes>
  );
  return route;
}

export default App;
