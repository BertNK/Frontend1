import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Comics from "./pages/comics.jsx";
import Comicinfo from "./pages/comicinfo.jsx";
import "./css/Global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/comics" element={<Comics/>} />
        <Route path="/comicinfo/:id" element={<Comicinfo/>} />
      </Routes>
    </Router>
  </StrictMode>
);
