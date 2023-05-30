import { RouteObject, Navigate } from "react-router-dom";
import Home from "./screens/Home/Home";
import Layout from "./screens/Layout/Layout";

const routeConfig: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      
    ],
  },
];

export default routeConfig;
