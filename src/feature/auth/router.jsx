import { Outlet } from "react-router-dom";
import Register from "./Sign-up/Register";
import Login from "./Login/Login";
import ForgotCode from "./forgotCode/ForgotCode";
import ForgotPassw from "./forgotPassword/ForgotPassw";
import HomeRegister from "./homeRegister/HomeRegister";

export const AuthRoute = {
    path: '/auth',
    element: <Outlet />,
    children: [
        {
            path: 'sign-in',
            element: <Login />,
            children: [
                {
                    path: 'forgot-code',
                    element: <ForgotCode/>,
                },
                {
                    path: 'forgotPass',
                    element: <ForgotPassw />
                },
                
            ]
        },
        {
            path: 'sign-up',
            element: <Register/>
        },
        {
            path: 'homeRegister',
            element: <HomeRegister/>
        }
    ]
}