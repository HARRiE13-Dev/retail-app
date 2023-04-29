import React from "react";
import SidebarAdmin from "./sidebar/Sidebar";
import NavbarsAdmin from "./navbar/Navbar";
import StatusBarAdmin from "./sidebar/StatusBar";

const LayoutAdmin = (props: { children: any }) => {
  //SideBar

  return (
    <>

      <div className="d-flex flex-row w-100 position-relative" style={{ background: '#F8F8F8', zIndex: '1' }}>
        <div className="flex-shrink-1">
          <SidebarAdmin />
        </div>
        <div className="w-75">
          <NavbarsAdmin />
          {props.children}
        </div>
        <div className="w-25 bg-white status-bar">
          <StatusBarAdmin />
        </div>
      </div>

    </>
  );
};

export default LayoutAdmin;
