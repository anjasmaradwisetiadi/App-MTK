import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Dashboard from '../view/Dashboard/Dashboard'
import PageNotFound from "../components/PageNotFound";


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <PageNotFound></PageNotFound>,
    element: (
        <Dashboard></Dashboard>
    ),
  },
  {
    path: "/dashboard",
    element: (
        <Dashboard></Dashboard>
    ),
  },
]);

export default router