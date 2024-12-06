import React from "react";
import "../Styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <img src="Tabler.png" alt="Tabler Logo" />
          <span>tabler</span>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#interface">Interface</a>
          <a href="#components">Components</a>
          <a href="#pages">Pages</a>
          <a href="#forms">Forms</a>
          <a href="#gallery">Gallery</a>
          <a href="#documentation">Documentation</a>
        </nav>
      </div>
      <div className="header-right">
        <button className="source-code-btn">Source code</button>
        <img src="notification.png" 
        alt="Notifications"
        className="notifications" 
        />
        <div className="user-profile">
          <img
            src="profile-pic.jpg"
            alt="User Profile"
            className="profile-pic"
          />
          <div className="user-info">
            <span className="user-name">Jane Pearson</span>
            <span className="user-role">Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
