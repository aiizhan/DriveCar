import { useRoutes } from "react-router-dom";
import Layout from "../../widgets/Layout/Layout";
import HomeRoute from "../../feature/Home/route";
import Register from "../../widgets/register/Register";
import LoginForm from "../../widgets/register/LoginForm";
import AddedPasswForm from "../../widgets/register/AddedPasswForm";

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
        },
        {
            path: '/addedpassw',
            element: <AddedPasswForm />
        }
    ]);
};
