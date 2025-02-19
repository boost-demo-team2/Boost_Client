import React from 'react';
import { createBrowserRouter,Navigate } from 'react-router-dom';
import Detailpage  from './pages/Detailpage';
import MakeGroutppage from './pages/MakeGrouppage';
import GroupListPage from './pages/GroupListPage.jsx';
import Notfound from './pages/Notfound.jsx';

const router = createBrowserRouter([
    { path : "/detail", element: <Detailpage/>},
    { path : "/makegroup", element: <MakeGroutppage/>},
    { path : "/grouplist", element: <GroupListPage/>},
    { path : "/notfound", element: <Notfound/>},
    { path : "*", element: <Navigate to="/notfound"/>} // 존재하지 않는 경로 이동
]);

export default router;
