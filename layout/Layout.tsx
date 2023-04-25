import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Navbars from "./navbar/Navbar";
import StatusBar from "./sidebar/StatusBar";

const Layout = (props: { children: any }) => {
  //SideBar

  return (
    <>
      <div className="d-flex flex-row w-100 position-relative" style={{ background: '#F8F8F8', zIndex: '1' }}>
        <div className="flex-shrink-1">
          <Sidebar />
        </div>
        <div className="w-75">
          <Navbars />
          {props.children}
        </div>
        <div className="w-25 bg-white status-bar">
          <StatusBar />
        </div>

      </div>


    </>
  );
};

export default Layout;
