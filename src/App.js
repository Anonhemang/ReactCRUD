import "./App.css";
import Home from "./components/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./components/Add";
import Edit from "./components/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Add />} />
          <Route path="/Edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
