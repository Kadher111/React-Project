import React from "react";
import ComponentB from "./ComponentB";
export const UserContext = React.createContext();
export const AnimalContext = React.createContext();
function ComponentA() {
  return (
    <div>
      <UserContext.Provider value={"Kadher"}>
        <AnimalContext.Provider value={"Lion"}>
          <ComponentB />
        </AnimalContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
