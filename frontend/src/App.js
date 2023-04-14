import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Layout } from './components/LayoutComponent';
import { ProjectsPage } from './pages/ProjectsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="projects" element={<ProjectsPage />} />
          </Route>
          <Route path="*" element={<>404</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
