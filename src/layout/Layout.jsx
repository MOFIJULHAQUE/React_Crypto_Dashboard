import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Router from "../routes/Router";

import "../layout/Layout.css";

const Layout = () => {
  return (
    <>
      <div className="dashboard-layout">
        <div className="sidebar-menu">
          <Sidebar />
        </div>
        <div className="content">
          <Router />
        </div>
      </div>
    </>
  );
};

export default Layout;
