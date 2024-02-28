import React from "react";
import { useRoutes } from "react-router-dom";
import { Layout } from "../components/Layout/layout";
import { Projects } from "../pages/Projects/Projects";
import { Project } from "../pages/Project/Project";
import { Skills } from "../pages/Skills/Skills";
import { Contacts } from "../pages/Contacts/Contacts";
import { Home } from "../pages/Home/Home";

export const MyRoutes:React.FC = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {path: "/", element: <Home/>},
                {path: "/skills", element: <Skills/>},
                {path: "/contacts", element: <Contacts/>},
                {path: "/project/:id", element: <Project/>},
            ]
        }
    ])
    return routes
}