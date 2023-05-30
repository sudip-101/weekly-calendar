import React from "react";
import PlanningIcon from "../../assets/planning.png";
import DocumentationIcon from "../../assets/documentation.png";
import HousekeepingIcon from "../../assets/housekeeping.png";
import SearchIcon from "../../assets/search-icon.png";
import NotificationIcon from "../../assets/notification.png";
import UserIcon from "../../assets/user-icon.png";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <header className="nav-container">
      <nav className="nav-wrapper">
        <div className="nav-title">
          <h3>Educator</h3>
          <p>Arthshala</p>
        </div>
        <ul className="nav-links">
          <li className="link-item">
            <div className="img-icon-1">
              <img src={PlanningIcon} alt="" />
            </div>
            <span>Planning</span>
          </li>
          <li className="link-item">
            <div className="img-icon-1">
              <img src={DocumentationIcon} alt="" />
            </div>
            <span>Documentation</span>
          </li>
          <li className="link-item">
            <div className="img-icon-1">
              <img src={HousekeepingIcon} alt="" />
            </div>
            <span>HouseKeeping</span>
          </li>
        </ul>
        <div className="user-details">
          <div className="img-icon-2">
            <img src={SearchIcon} alt="" />
          </div>
          <div className="img-icon-2">
            <img src={NotificationIcon} alt="" />
          </div>
          <div className="user-img">
            <img src={UserIcon} alt="" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
