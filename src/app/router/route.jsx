import { useRoutes } from "react-router-dom";
import Layout from "../../widgets/Layout/Layout";
import HomeRoute from "../../feature/Home/route";  

export const MyRoutes = () => {
    return useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                HomeRoute  
            ]
        }
    ]);
};
