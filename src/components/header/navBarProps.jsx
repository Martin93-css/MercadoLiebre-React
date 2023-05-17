import React from "react";
import { Link } from "react-router-dom";

function Enlaces(props) {
  return (
    <div>
      <header>
        {/* Ejemplo de enlace interno */}
        <nav class="main-navbar">
          <ul class="navbar-derecho">
            <li>
              {props.enlaces.map((enlace, i) => (
                <Link to="#" key={enlace + i}> {enlace} </Link>
              ))}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Enlaces;
