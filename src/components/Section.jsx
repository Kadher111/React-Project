import React from "react";

const Section = ({ number }) => {
  const colors = [
    "#FF5733", // Red
    "#33FF57", // Green
    "#5733FF", // Blue
    "#FFC300", // Yellow
    "#33FFF6", // Cyan
    "#FF33D4", // Pink
    "#F5A623", // Orange
    "#8E44AD", // Purple
  ];

  return (
    <div
      style={{
        backgroundColor: colors[number - 1],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "2rem",
        border: "2px solid #fff",
      }}
    >
      {number}
    </div>
  );
};

export default Section;