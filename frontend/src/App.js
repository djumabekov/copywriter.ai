import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Layout as LayoutHomePage } from './components/HomePageComponents/LayoutComponent';
import { Layout as LayoutOtherPage } from './components/LayoutComponents';
import { PostForBlogPage } from './pages/PostForBlogPage';
import { RubricsPage } from './pages/RubricsPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutHomePage />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/" element={<LayoutOtherPage />}>
            <Route path="/rubrics/post-for-blog" element={<PostForBlogPage />} />
          </Route>
          <Route path="/" element={<LayoutOtherPage />}>
            <Route path="rubrics" element={<RubricsPage />} />
          </Route>
          <Route path="*" element={<>404</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
