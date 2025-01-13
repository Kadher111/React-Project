import React, { useContext } from "react";
import { UserContext, AnimalContext } from "./ComponentA";

function ComponentC() {
  const user = useContext(UserContext); // Using useContext to consume the value
  const animal = useContext(AnimalContext);
  return (
    <div>
      <div>
        Your Name is {user} it is an {animal}
      </div>{" "}
      {/* Kadher will be displayed here */}
    </div>
  );
}

export default ComponentC;
