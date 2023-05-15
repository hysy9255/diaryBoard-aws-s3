import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostLists from './pages/PostLists/PostLists';
import Editor from './pages/Editor/Editor';
import PostPage from './pages/PostPage/PostPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostLists />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/postpage" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
