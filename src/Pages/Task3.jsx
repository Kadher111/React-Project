// import ComingSoon from "../components/ComingSoon";
import * as React from "react";
import { useEffect, useState } from "react";
export default function Task2() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("UseEffect Called");
    window.addEventListener("mousemove", logMousePosition);

  }, []);
  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
}
