import { useRoutes } from "react-router-dom";
import Layout from "../../widgets/Layout/Layout";
import HomeRoute from "../../feature/Home/route";
import { AuthRoute } from "../../feature/auth/router";
import AdminPart from "../../feature/admin/AdminPart";
import AllCars from "../../feature/all-cars/AllCars";
import { AdminLayout } from "../../widgets/Layout/AdminLayout";

export const MyRoutes = () => {
    return useRoutes([
        AuthRoute,
        {
            path: "/",
            element: <Layout />,
            children: [
                HomeRoute,


            ]
        },
        {
            path: 'allcars',
            element: <AllCars />
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
