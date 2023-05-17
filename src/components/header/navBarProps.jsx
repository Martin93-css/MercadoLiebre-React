import React from "react";
import { Link } from "react-router-dom";

function Enlaces(props) {
  
  
  return (
    <div>
      <header>
        {/* Ejemplo de enlace interno */}
        <nav className="main-navbar">
          <ul className="navbar-derecho">
            <li>
              {props.enlacesIzquierda.map((enlace, i) => (
                <Link to="#" key={enlace + i}> {enlace} </Link>
              ))}
            </li>
          </ul>
          <ul className="navbar-izquierdo">
            <li> {props.enlacesDerecha.map((enlace, i) => (
                <Link to="#" key={enlace + i}> {enlace} </Link>
              ))} </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Enlaces;
