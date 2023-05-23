import React from "react";
/* import "./assets/css/App.css"; */
import Home from "./pages/Home";
import Login from './pages/Login'
import Register from './pages/Register'
import { Route , Routes} from "react-router-dom";


function App() {
  return (
    <Routes>

      <Route path="/"  exact={true} Component={Home}/>
      <Route path="/ingresar"   Component={Login}/>
      <Route path="/crear-cuenta"   Component={Register}/> 
 

    </Routes>
    
      
);
}

export default App;
