export default function ComingSoon() {
    const containerStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      margin: 0,
    };
  
    const headingStyle = {
      fontSize: "3rem",
      fontFamily: "Arial, sans-serif",
      color: "#333",
    };
  
    return (
      <div style={containerStyle}>
        <h1 style={headingStyle}>Coming Soon</h1>
      </div>
    );
  }
  