import React from "react";
/* import "./assets/css/App.css"; */
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error404 from "./components/error404/Error404";
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingresar" element={<Login />} />
        <Route path="/crear-cuenta" element={<Register />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    
  );
}

export default App;
