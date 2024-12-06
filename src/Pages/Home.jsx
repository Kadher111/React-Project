import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css"; // Import the CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Home Page</h1>
      <p className="home-description">Choose a task to navigate:</p>
      <div className="home-links">
        <Link to="/Task1" className="home-link">
          Task 1
        </Link>
        <Link to="/Task2" className="home-link">
          Task 2
        </Link>
        <Link to="/Task3" className="home-link">
          Task 3
        </Link>
      </div>
    </div>
  );
}

export default Home;

