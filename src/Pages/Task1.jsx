import React from "react";
import Section from "../components/Section";
import '../Task1.css'

export default function Task1() {
  return (
    <>
      <div className="grid-container">
        {Array.from({ length: 8 }, (_, index) => (
          <Section key={index} number={index + 1} />
        ))}
      </div>
    </>
  );
}
