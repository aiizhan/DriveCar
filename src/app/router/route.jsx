import { useRoutes } from "react-router-dom";
import Layout from "../../widgets/Layout/Layout";
import HomeRoute from "../../feature/Home/route";
import Register from "../../feature/register/Register";
import LoginForm from "../../feature/register/LoginForm";


export const MyRoutes = () => {
    return useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                HomeRoute
            ]
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/login',
            element: <LoginForm />
        }
    ]);
};
