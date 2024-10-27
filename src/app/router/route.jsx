// import { useRoutes } from "react-router-dom";
// import Layout from "../../widgets/Layout/Layout";
// import HomeRoute from "../../feature/Home/route";
// import Register from "../../widgets/register/Register";
// import LoginForm from "../../widgets/register/LoginForm";
// import RegisterForm from "../../widgets/register/RegisterForm";


// export const MyRoutes = () => {
//     return useRoutes([
//         {
//             path: "/",
//             element: <Layout />,
//             children: [
//                 HomeRoute
//             ]
//         },
//         {
//             path: '/register',
//             element: <Register />
//         },
//         {
//             path: '/registerform',
//             element: <RegisterForm />
//         },
//         {
//             path: '/login',
//             element: <LoginForm />
//         }
//     ]);
// };


import { useRoutes } from "react-router-dom";
import Layout from "../../widgets/Layout/Layout";
import HomeRoute from "../../feature/Home/route";
import Register from "../../widgets/register/Register"; // Содержит RegisterForm
import LoginForm from "../../widgets/register/LoginForm";

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
