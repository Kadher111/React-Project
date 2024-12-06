import React from "react";
import "../Styles/Header.css";
import Navigation from "../components/Navigation";

const Header = () => {
  return (
    <>
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <img src="Tabler.png" alt="Tabler Logo" />
          <span>tabler</span>
          </div>
      </div>
      <div className="header-right">
        <button className="source-code-btn">Source code</button>
        <img src="notification.png" 
        alt="Notifications"
        className="notifications" 
        />
        <div className="user-profile">
          <img
            src="Profile.jpg"
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
    
    <Navigation />
    <hr />
    </>
    
  );
};

export default Header;
