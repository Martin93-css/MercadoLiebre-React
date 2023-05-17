import React from "react";
import "./assets/css/App.css";
import NavBar from "./components/header/navBar";
import HeaderTop from "./components/header/headerTop";
function App() {
  return (
    <React.StrictMode>
      <HeaderTop />
      <NavBar />
    </React.StrictMode>
  );
}

export default App;
