import { useRoutes } from "react-router-dom";
import Layout from "../../widgets/Layout/Layout";
import HomeRoute from "../../feature/Home/route";
import Register from "../../feature/register/Register";
import Location from "../../feature/register/location/Location";
import ForgotPassw from "../../feature/register/forgotPassword/ForgotPassw";
import ForgotCode from "../../feature/register/forgotCode/ForgotCode";
import AddedPassw from "../../feature/register/addedPassw/AddedPassw";

import Adminlogin from "../../widgets/RegisterLoginAdmin/admin-login/adminlogin";
import Adminregister from "../../widgets/admin-register/adminregister";
import AdminForgotPassword from  "../../widgets/RegisterLoginAdmin/AdminForgotPassword/AdminForgotPassword";
import AdminForgotCode from "../../widgets/RegisterLoginAdmin/AdminForgotCode/AdminForgotCode";
import AdminAddedPassw from "../../widgets/RegisterLoginAdmin/AdminAddedPassw/AdminAddedPassw";
import AdminPart from "../../feature/admin/AdminPart";
import AllCars from "../../feature/all-cars/AllCars";

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
            path: '/location',
            element: <Location />
        },
        {
            path: '/forgotPassw',
            element: <ForgotPassw />
        }, 
        { 
            path: '/forgotCode',
            element: <ForgotCode />
        },
        {
            path: '/addedPassw',
            element: <AddedPassw />
        },

        //Admin
        {
            path: '/adminlogin',
            element: <Adminlogin />
        },
        {
            path: '/adminregister',
            element: <Adminregister />
        },
        {
            path: '/admin-forgotPassw',
            element: <AdminForgotPassword />
        },
        {
            path: '/admin-forgotCode',
            element: <AdminForgotCode />
        },
        {
            path: '/admin-addedPassw',
            element: <AdminAddedPassw />
        },
        {

            path: '/admin',
           element: <AdminPart />
        },
{
            path: '/allCars',
            element: <AllCars/>

        }

    ]);
};
