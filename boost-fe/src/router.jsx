import React from 'react';
import { createBrowserRouter,Navigate } from 'react-router-dom';
import Detailpage  from './pages/Detailpage';
import MakeGroutppage from './pages/MakeGrouppage';
import PublicGroupListPage from './pages/PublicGroupListPage';
import PrivateGroupListPage from './pages/PrivateGroupListPage.jsx';

const router = createBrowserRouter([
    { path : "/detail", element: <Detailpage/>},
    { path : "/makegroup", element: <MakeGroutppage/>},
    { path : "/publicgroup", element: <PublicGroupListPage/>},
    { path : "/privategroup", element: <PrivateGroupListPage />},
]);

export default router;
