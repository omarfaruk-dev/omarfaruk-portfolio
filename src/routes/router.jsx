import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayouts from '../layouts/HomeLayouts';
import ErrorPage from '../components/Home/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayouts,
    },
    {
        path: '*',
        Component: ErrorPage,
    }
])

export default router;