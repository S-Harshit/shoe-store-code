import React from "react";
import { NavBar } from "../Navbar";
import { Outlet } from "react-router-dom";
import "./index.scss";

export const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};
