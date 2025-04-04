import React from 'react';
import { createBrowserRouter,Navigate } from 'react-router-dom';
import GroupListPage from "./pages/group/GroupListPage";
import MakeGroup from './pages/group/MakeGroup';
import GroupAccess from './pages/group/GroupAccess';
import GroupDetailPage from './pages/group/GroupDetailPage';
import MakePost from './pages/Post/MakePost';
// import Notfound from './pages/Notfound.jsx';
// import PostAccess from './pages/PostAccess.jsx';
// import MakePost from './pages/MakePost.jsx';
// import PostDetailPage from './pages/PostDetailPage.jsx';

const router = createBrowserRouter([
  { path: "/", element: <GroupListPage/>},
  { path : "/groups", element: <MakeGroup/>},
  { path : "/groups/:groupId/verify-password", element: <GroupAccess/>},
  { path : "/groups/:groupId", element: <GroupDetailPage/>},
  { path : "groups/:groupId/posts", element: <MakePost />},
  /*{ path : "/groups/:groupId/verify-password", element: <GroupAccess/>},
  { path : "/groups/:groupId/posts", element: <MakePost/>},
  { path : "/posts/:postId/verify-password", element: <PostAccess/>},
  { path : "/notfound", element: <Notfound/>},
  { path : "*", element: <Navigate to="/notfound"/>} // 존재하지 않는 경로 이동*/
]);

export default router;
