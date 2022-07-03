import React from "react";
import { Link, NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="right-sidebar">
        <div className="sidebar-title">
          <h3 className="weight-600 font-16 text-blue">
            Layout Settings
            <span className="btn-block font-weight-400 font-12">
              User Interface Settings
            </span>
          </h3>
          <div className="close-sidebar" data-toggle="right-sidebar-close">
            <i className="icon-copy ion-close-round" />
          </div>
        </div>
        <div className="right-sidebar-body customscroll">
          <div className="right-sidebar-body-content">
            <h4 className="weight-600 font-18 pb-10">Header Background</h4>
            <div className="sidebar-btn-group pb-30 mb-10">
              <a
                href="javascript:void(0);"
                className="btn btn-outline-primary header-white "
              >
                White
              </a>
              <a
                href="javascript:void(0);"
                className="btn btn-outline-primary header-dark active"
              >
                Dark
              </a>
            </div>
            <h4 className="weight-600 font-18 pb-10">Sidebar Background</h4>
            <div className="sidebar-btn-group pb-30 mb-10">
              <a
                href="javascript:void(0);"
                className="btn btn-outline-primary sidebar-light active"
              >
                White
              </a>
              <a
                href="javascript:void(0);"
                className="btn btn-outline-primary sidebar-dark "
              >
                Dark
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="left-side-bar">
        <div className="brand-logo">
          <Link to="/dashboard">
            <img
              src="vendors/images/hyundai-motor-company-logo.svg"
              alt
              className="dark-logo"
            />
            <img
              src="vendors/images/hyundai-motor-company-logo-light.svg"
              alt
              className="light-logo"
            />
          </Link>
          <div className="close-sidebar" data-toggle="left-sidebar-close">
            <i className="ion-close-round" />
          </div>
        </div>
        <div className="menu-block customscroll">
          <div className="sidebar-menu">
            <ul id="accordion-menu">
              <li>
                <NavLink
                  to="/dashboard"
                  style={{ textDecoration: "none" }}
                  className="dropdown-toggle no-arrow "
                >
                  <span className="micon dw dw-house-1" />
                  <span className="mtext">Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/vin-search"
                  style={{ textDecoration: "none" }}
                  className="dropdown-toggle no-arrow"
                >
                  <span className="micon dw dw-search" />
                  <span className="mtext">Operation VIN Search</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/vin-tracking"
                  className="dropdown-toggle no-arrow"
                  style={{ textDecoration: "none" }}
                >
                  <span className="micon dw dw-map" />
                  <span className="mtext">VIN Tracking</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/history-card"
                  className="dropdown-toggle no-arrow"
                  style={{ textDecoration: "none" }}
                >
                  <span className="micon dw dw-board" />
                  <span className="mtext">Vehicle History Card</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pdi-delivery-inspection"
                  className="dropdown-toggle no-arrow"
                  style={{ textDecoration: "none" }}
                >
                  <span className="micon dw dw-check" />
                  <span className="mtext">Delivery Inspection</span>
                </NavLink>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle">
                  <span className="micon dw dw-car" />
                  <span className="mtext">Inventory Management</span>
                </a>
                <ul className="submenu">
                  <li>
                    <NavLink
                      to="/inward-material"
                      className="dropdown-toggle no-arrow"
                      style={{ textDecoration: "none" }}
                    >
                      <span className="mtext" style={{ fontSize: "16px" }}>
                        INWARD MATERIAL
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/outward-material"
                      className="dropdown-toggle no-arrow"
                      style={{ textDecoration: "none" }}
                    >
                      <span className="mtext" style={{ fontSize: "15px" }}>
                        OUTWARD MATERIAL
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/store-inventory-status"
                      className="dropdown-toggle no-arrow"
                      style={{ textDecoration: "none" }}
                    >
                      <span className="mtext" style={{ fontSize: "15px" }}>
                        STORE INVENTORY STATUS
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/part-inventory-status"
                      className="dropdown-toggle no-arrow"
                      style={{ textDecoration: "none" }}
                    >
                      <span className="mtext" style={{ fontSize: "15px" }}>
                        PART INVENTORY STATUS
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                  to="/offline-status"
                  className="dropdown-toggle no-arrow"
                  style={{ textDecoration: "none" }}
                >
                  <span className="micon dw dw-stop" />
                  <span className="mtext">Offline Status</span>
                </NavLink>
              </li>
              {/* <li>
                <Link to="/kits-inward" className="dropdown-toggle no-arrow">
                  <span className="micon dw dw-edit2"></span>

                  <span className="mtext">Kits Inward</span>
                </Link>
              </li>
              <li>
                <Link to="/inward-check" className="dropdown-toggle no-arrow">
                  <span className="micon dw dw-calendar1" />
                  <span className="mtext">Inward Check</span>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
