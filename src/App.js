import React from "react";
/* import "./assets/css/App.css"; */
import Home from "./pages/Home";
import Login from './pages/Login'
import Register from './pages/Register'
import Error404 from "./components/error404/Error404";
import { Route , Routes , Switch} from "react-router-dom";


function App() {
  return (
    <Routes>
      <Switch>
      <Route path="/"  exact={true} Component={Home}/>
      <Route path="/ingresar"   Component={Login}/>
      <Route path="/crear-cuenta"   Component={Register}/> 
      <Route Component={Error404}/> 
      </Switch>

    </Routes>
    
      
);
}

export default App;
