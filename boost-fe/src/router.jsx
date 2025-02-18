import React from 'react';
import { createBrowserRouter,Navigate } from 'react-router-dom';
import Detailpage  from './pages/Detailpage';
import MakeGroutppage from './pages/MakeGrouppage';

import GroupListPage from './pages/GroupListPage.jsx';

const router = createBrowserRouter([
    { path : "/detail", element: <Detailpage/>},
    { path : "/makegroup", element: <MakeGroutppage/>},

    { path : "/grouplist", element: <GroupListPage />},
]);

export default router;
