import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task1 from "./Pages/Task1";
import Task2 from "./Pages/Task2";
import Task3 from "./Pages/Task3";
import Home from "./Pages/Home";
import DataFetching from "./components/DataFetching";
import Fetching from "./components/Fetching";
import ComponentC from "./components/ComponentC";
import ComponentA from "./components/ComponentA";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Task1" element={<Task1 />} />
          <Route path="/Task2" element={<Task2 />} />
          <Route path="/Task3" element={<Task3 />} />
          <Route path="/df" element={<DataFetching />} />
          <Route path="/fetching" element={<Fetching />} />
          <Route path="/ComponentC" element={<ComponentC />} />
          <Route path="/ComponentA" element={<ComponentA />} />
          <Route path="/CounterOne" element={<CounterOne />} />
          <Route path="/CounterOne" element={<CounterOne />} />
          <Route path="/CounterTwo" element={<CounterTwo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
