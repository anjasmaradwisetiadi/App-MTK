import * as React from "react";
import { createRoot } from "react-dom/client";
import Dashboard from '../view/Dashboard/Dashboard'
import PageNotFound from "../components/PageNotFound/PageNotFound";
import Unknown from "../view/Unknown"
import Users from "../view/Users"
import Login from "../view/Auth/Login"
import Register from "../view/Auth/Register"
import Profile from "../view/Profile"
import About from "../view/About";


const router = [
  {
    name: "/",
    key: "/",
    route: "/",
    element: ( 
      <Users></Users>
    ),
  },
  {
    name: "register",
    key: "register",
    route: "/register",
    element: (
        <Register></Register>
    ),
  },
  {
    name: "login",
    key: "login",
    route: "/login",
    element: (
        <Login></Login>
    ),
  },
  {
    name: "unknown",
    key: "unknown",
    route: "/unknown",
    element: (
        <Unknown></Unknown>
    ),
  },
  {
    name: "users",
    key: "users",
    route: "/users",
    element: (
        <Users></Users>
    ),
  },
  {
    path: "/about",
    element: (
        <About></About>
    ),
  },
  {
    path: "/profile",
    element: (
        <Profile></Profile>
    ),
  },
];

export default router