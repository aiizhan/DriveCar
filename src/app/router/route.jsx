import { useRoutes } from "react-router-dom";
import Layout from "../../widgets/Layout/Layout";
import HomeRoute from "../../feature/Home/route";
import Register from "../../widgets/register/Register";
import LoginForm from "../../widgets/register/LoginForm";
import AddedPasswForm from "../../widgets/register/AddedPasswForm";
import { AdminLayout } from "../../widgets/Layout/AdminLayout";
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
                HomeRoute,


            ]
        },
        {
            path: '/register',
            element: <Register /> 
            path: 'allcars',
            element: <AllCars />
        },


        {
            path: '/login',
            element: <LoginForm /> 
        },
        {
            path: '/addedpassw',
            element: <AddedPasswForm />
        }

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
            element: <AdminLayout />,
            children: [
                {
                    path: '/adminpart', 
                    element:<AdminPart/>
                }
            ]
        }, 


    ]);
};
