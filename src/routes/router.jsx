import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayouts from '../layouts/HomeLayouts';

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayouts,
    }
])

export default router;