import React from "react";
const skyStyles = {
  position: "absolute",
  opacity: 0.8,
  width: "100%",
  height: "50%",
  top: "0",
  background: "radial-gradient(at 50% 70%, #820, #610, #400, #100)",
  zIndex: 30,
};

const seaStyles = {
  position: "absolute",
  width: "100%",
  height: "50%",
  top: "50%",
  background: "radial-gradient(at 50% 0%, #007, #004)",
  zIndex: 60,
};

const sunStyles = {
  position: "absolute",
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  left: "45%",
  zIndex: 40,
  background: "linear-gradient(#ff0, #d00)",
  boxShadow: "0 0 40px 6px #f20, 0 0 150px 10px #f33",
  animation: "rise 24s ease forwards",
};
export const SunriseAnimation = () => {
  // Add other styles for elements like bird, light, etc.

  return (
    <div className="container">
      <div style={skyStyles}></div>
      <div style={seaStyles}>
        <div className="light"></div>
      </div>

      <div style={sunStyles}></div>
      {/* Add other elements and styles here */}
    </div>
  );
};
