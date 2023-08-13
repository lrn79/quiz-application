import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/rootLayout';
import { Home, SignIn, SignUp, NotFound, TestExam, Result, Exercises, ResultProgress } from '../pages';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/test-exam',
                element: <TestExam />,
            },
            {
                path: '/exercises',
                element: <Exercises />,
            },
            {
                path: '/result',
                element: <Result />,
            },
            {
                path: '/result/:id',
                element: <ResultProgress />,
            },
        ],
    },
    {
        path: '/dashboard',
        element: <p>Dashboard</p>,
        children: [
            {
                index: true,
                element: <p>dashboard page</p>,
            }
        ],
    },
    {
        path: '/sign-in',
        element: <SignIn />,
    },
    {
        path: '/sign-up',
        element: <SignUp />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

export default routes;