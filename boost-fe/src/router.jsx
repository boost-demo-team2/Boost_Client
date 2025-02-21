import React from 'react';
import { createBrowserRouter,Navigate } from 'react-router-dom';
import Detailpage  from './pages/Detailpage';
import GroupListPage from './pages/GroupListPage.jsx';
import Notfound from './pages/Notfound.jsx';
import MakeGroup from './pages/MakeGroup.jsx';
import PostAccess from './pages/PostAccess.jsx';
import MakePost from './pages/MakePost.jsx';
import GroupAccess from './pages/GroupAccess.jsx';

const router = createBrowserRouter([
  { path: "/", element: <GroupListPage/>},
  { path : "/detail", element: <Detailpage/>},
  { path : "/groups", element: <MakeGroup/>},
  { path : "/groups/:groupId/verify-password", element: <GroupAccess/>},
  { path : "/groups/:groupId/posts", element: <MakePost/>},
  { path : "/posts/:postId/verify-password", element: <PostAccess/>},
  { path : "/notfound", element: <Notfound/>},
  { path : "*", element: <Navigate to="/notfound"/>} // 존재하지 않는 경로 이동
]);

export default router;
