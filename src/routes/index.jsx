import * as React from "react";
import WrapAuth from "./WrapAuth";
import WrapNonAuth from "./WrapNonAuth";

const router = [
  {
    name: "/",
    key: "/",
    route: "/",
    element: ( 
      <WrapAuth name='users'></WrapAuth>
    ),
  },
  {
    name: "register",
    key: "register",
    route: "/register",
    element: (
      <WrapNonAuth name='register'></WrapNonAuth>
    ),
  },
  {
    name: "login",
    key: "login",
    route: "/login",
    element: (
      <WrapNonAuth name='login'></WrapNonAuth>
    ),
  },
  {
    name: "unknown",
    key: "unknown",
    route: "/unknown",
    element: (
      <WrapAuth name='unknown'></WrapAuth>
    ),
  },
  {
    name: "users",
    key: "users",
    route: "/users",
    element: (
      <WrapAuth name='users'></WrapAuth>
    ),
  },
  {
    name: "about",
    key: "about",
    route: "/about",
    element: (
      <WrapAuth name='about'></WrapAuth>
    ),
  },
];

export default router