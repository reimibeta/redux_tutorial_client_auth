import { Navigate,Outlet } from 'react-router-dom';
import Signup from "./auth/Signup";
import Feature from "./Feature";
import Welcome from "./Welcome";

const routes = (isLoggedIn) => [
  {
    path: '/',
    element: isLoggedIn ? <Welcome /> : <Navigate to="/signup" />,
    children: [
      { path: '/', element: <Welcome /> },
      { path: '/feature', element: <Feature /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
    //   {
    //     path: 'member',
    //     element: <Outlet />,
    //     children: [
    //       { path: '/', element: <MemberGrid /> },
    //       { path: '/add', element: <AddMember /> },
    //     ],
    //   },
    ],
  },
  {
    path: '/',
    element: !isLoggedIn ? <Signup /> : <Navigate to="/" />,
    children: [
      { path: '/signup', element: <Signup /> },
      { path: '/', element: <Navigate to="/signup" /> },
    ],
  },
];

export default routes;