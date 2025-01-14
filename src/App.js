import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task1 from "./Pages/Task1";
import React, { Component } from "react";
import Task2 from "./Pages/Task2";
import Task3 from "./Pages/Task3";
import Home from "./Pages/Home";
import DataFetching from "./components/DataFetching";
import Fetching from "./components/Fetching";
import ComponentC from "./components/ComponentC";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import { useReducer, useContext } from "react";
import DataFetching1 from "./components/DataFetching1";
import DataFetching2 from "./components/DataFetching2";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const CountContext = React.createContext();
export default function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Task1" element={<Task1 />} />
          <Route path="/Task2" element={<Task2 />} />
          <Route path="/Task3" element={<Task3 />} />
          <Route path="/df" element={<DataFetching />} />
          <Route path="/dfone" element={<DataFetching1 />} />
          <Route path="/dftwo" element={<DataFetching2 />} />
          <Route path="/fetching" element={<Fetching />} />
          <Route path="/ComponentC" element={<ComponentC />} />
          <Route path="/ComponentA" element={<ComponentA />} />
          <Route path="/CounterOne" element={<CounterOne />} />
          <Route path="/CounterOne" element={<CounterOne />} />
          <Route path="/CounterTwo" element={<CounterTwo />} />
        </Routes>
      </BrowserRouter>

      {/* <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <div>Count - {count}</div>
        <div>
          <ComponentA />
        </div>
        <div>
          <ComponentB />
        </div>
      </CountContext.Provider> */}
    </div>
  );
}
