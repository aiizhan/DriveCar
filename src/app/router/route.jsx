import { useRoutes } from "react-router-dom";
import Layout from "../../widgets/Layout/Layout";
import HomeRoute from "../../feature/Home/route";
import { AuthRoute } from "../../feature/auth/router";

export const MyRoutes = () => {
    return useRoutes([
    AuthRoute,
        {
            path: "/",
            element: <Layout />,
            children: [
                HomeRoute
            ]
        },
        // {
        //     path: '/register',
        //     element: <Register />
        // },
        // {
        //     path: '/location',
        //     element: <Location />
        // },
        // {
        //     path: '/forgotPassw',
        //     element: <ForgotPassw />
        // }, 
        // { 
        //     path: '/forgotCode',
        //     element: <ForgotCode />
        // },
        // {
        //     path: '/addedPassw',
        //     element: <AddedPassw />
        // }
    ]);
};
