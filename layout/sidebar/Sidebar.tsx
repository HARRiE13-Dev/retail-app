import React from "react";
import { useEffect, useRef, useState } from "react";

// Front Awesome an Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMessage,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";

type Props = {
  isActive: boolean;
  setIsActive: (...arg: any) => void;
  collapse: string;
  setCollapse: (...arg: any) => void;
  isActiveOnMobile: boolean;
  setIsActiveOnMobile: (...arg: any) => void;
};

const Sidebar = () => {
  // Sub Menu Mockup
  const [items, setItems] = useState([1, 2, 3, 4]);
  const [isActive, setIsActive] = useState<any>();
  const [collapse, setCollapse] = useState<any>();
  const [isActiveOnMobile, setIsActiveOnMobile] = useState<any>();

  // Toggle Collapse
  const toggleCollapse = (menu: any) => {
    // Desktops Collapse Mode
    if (isActive == true) {
      if (collapse != menu) {
        setCollapse(menu);
      } else if (collapse == menu) {
        setCollapse(null);
      }
    }
    // Mobile Modal Mode
    else if (isActive == false) {
      const menuModal = menu + "Modal";
      setCollapse(menuModal);
      if (collapse != menuModal) {
        setCollapse(menuModal);
      } else if (collapse == menuModal) {
        setCollapse(null);
      }
    }
  };

  //On Click Outside => Close Toogle
  const areaDetect = useRef(null);

  //   useEffect(() => {
  //     if (!collapse) return;
  //     function handleClick(event) {
  //       if (areaDetect.current && !areaDetect.current.contains(event.target)) {
  //         setCollapse(null);
  //       }
  //     }
  //     window.addEventListener("click", handleClick);
  //   });

  return (
    <>
      <ul
        ref={areaDetect}
        className={`${isActive ? "sidebar" : "active"} ${isActiveOnMobile ? "visually-hidden" : ""
          } navbar-nav border bg-white`}

        style={{ zIndex: '1', height: '100%', borderRadius: '40px 0px 0px' }}
      >
        {/* Side Header */}
        <div className="d-flex sidebar-brand align-items-center justify-content-center">
          <img
            className=" p-1 mt-4"
            src="/image/logo1.png"
            alt=""
            width="50"
          />
        </div>

        <div
          className={`${isActive ? "" : "visually-hidden"
            } sidebar-heading pl-4`}
        >
          Naviagation
        </div>
        {/* Menu 1 */}
        <li className="mt-2 nav-item fw-bold">
          <a
            className="nav-link py-0 collapsed"
            onClick={() => toggleCollapse("Dashboard")}
            style={{ color: '#c20b0f' }}
          >
            <div
              className={` ${collapse == "Dashboard" ? "bg-main text-white" : ""
                } btn-focus p-2 rounded-2 d-flex ${isActive ? "justify-content-between" : "justify-content-center"
                }`}
            >
              <div className="align-items-center btn-sidebar p-2 rounded">
                <FontAwesomeIcon icon={faHouse} style={{ fontSize: '20px' }} />
                <span className={`${isActive ? "" : "visually-hidden"} pl-2`}>
                  Dashboard
                </span>
              </div>
              <div
                className={`${isActive ? "" : "visually-hidden"} ${collapse == "Dashboard" ? "arrow-active" : ""
                  } sidebar_icon_list px-2`}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </div>
          </a>
          <div
            id="collapseUtilities"
            className={` ${collapse == "Dashboard" ? "" : "visually-hidden"
              } pl-4 text-secondary `}
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="dashed pl-2">
              {items.slice(0, 4).map((item) => (
                <a key={item} className="nav-link py-2 collapsed menu-sidebar">
                  <span>Dashboard {item}</span>
                </a>
              ))}
            </div>
          </div>
          <div
            className={`${collapse == "DashboardModal" ? "" : "visually-hidden"
              } position-absolute z-index-1 top-menu-1`}
            id="myModal"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  {items.slice(0, 4).map((item) => (
                    <a
                      key={item}
                      className="nav-link  py-2 px-2 collapsed  menu-sidebar-mobile"
                    >
                      <span>Dashboard {item}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </li>

        {/* Menu 2 */}
        <li className="mt-2 nav-item fw-bold">
          <a
            className="nav-link py-0 collapsed"
            onClick={() => toggleCollapse("Layout")}
            style={{ color: '#c20b0f' }}
          >
            <div
              className={` ${collapse == "Layout" ? "bg-main text-white" : ""
                } ${isActive ? "justify-content-between" : "justify-content-center"
                } btn-focus p-2 rounded-2 d-flex `}
            >
              <div className="align-items-center btn-sidebar p-2 rounded">
                <FontAwesomeIcon icon={faMessage} style={{ fontSize: '20px' }} />
                <span className={`${isActive ? "" : "visually-hidden"} pl-2`}>
                  Layouts
                </span>
              </div>
              <div
                className={`${isActive ? "" : "visually-hidden"} ${collapse == "Dashboard" ? "arrow-active" : ""
                  } sidebar_icon_list px-2`}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </div>
          </a>
          <div
            className={` ${collapse == "Layout" ? "" : "visually-hidden"
              } pl-4 text-secondary`}
          >
            <div className=" dashed pl-2">
              {items.slice(0, 4).map((item) => (
                <a key={item} className="nav-link py-2 collapsed menu-sidebar">
                  <span>Layout {item}</span>
                </a>
              ))}
            </div>
          </div>
          <div
            className={`${collapse == "LayoutModal" ? "" : "visually-hidden"
              } position-absolute z-index-1 top-menu-2`}
            id="myModal"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  {items.slice(0, 4).map((item) => (
                    <a
                      key={item}
                      className="nav-link py-2 collapsed menu-sidebar"
                    >
                      <span>Layout {item}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </li>

      </ul>
    </>
  );
};

export default Sidebar;
