import React from "react";
import { Link } from "react-router-dom";
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
          <a href="index.html">
            <img
              src="vendors/images/hyundai-motor-company-logo.svg"
              alt
              className="dark-logo"
            />
            <img
              src="vendors/images/hyundai-motor-company-logo.svg"
              alt
              className="light-logo"
            />
          </a>
          <div className="close-sidebar" data-toggle="left-sidebar-close">
            <i className="ion-close-round" />
          </div>
        </div>
        <div className="menu-block customscroll">
          <div className="sidebar-menu">
            <ul id="accordion-menu">
              <li>
                <Link to="/dashboard" className="dropdown-toggle no-arrow">
                  <span className="micon dw dw-house-1" />
                  <span className="mtext">Dashboard</span>
                </Link>
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