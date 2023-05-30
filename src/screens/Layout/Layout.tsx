import React from "react";
import "./Layout.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Layout: React.FC = () => {
  return (
    <div className="layout-container">
      <Navbar />
      <div className="contents">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
