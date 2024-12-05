import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task1 from './Pages/Task1';
import Task2 from './Pages/Task2';

export default function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Task1" element={<Task1 />} />
          <Route path="/Task2" element={<Task2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
