import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Layout as LayoutHomePage } from './components/HomePageComponents/LayoutComponent';
import { Layout as LayoutOtherPage } from './components/LayoutComponents';
import { PostForBlogPage } from './pages/PostForBlogPage';
import { RubricsPage } from './pages/RubricsPage';
import { TemplatesPage } from './pages/TemplatesPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { LoginPage } from './pages/LoginPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutHomePage />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/" element={<LayoutOtherPage />}>
          <Route path="/rubrics/project" element={<PostForBlogPage />} />
        </Route>
        <Route path="/" element={<LayoutOtherPage />}>
          <Route path="rubrics" element={<RubricsPage />} />
        </Route>
        <Route path="/" element={<LayoutOtherPage />}>
          <Route path="templates" element={<TemplatesPage />} />
        </Route>
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="*" element={<>404</>} />
      </Routes>
    </>
  );
}

export default App;
