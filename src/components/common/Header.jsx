import React from "react";
import { Link } from "react-router-dom";
import banner from '../../assets/images/img-home-banner.jpg'
import logo from '../../assets/images/logo-mercado-liebre.svg'
function NavBarProps(props) {
  
  
  return (
    <React.Fragment>
   <div>
   <section className="header-top">
        <div className="imagen-mercado-libre">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <form action="buscar" method="POST">
          <input type="search" name="buscador" placeholder="Buscar productos" className="barra-de-busqueda" />
          <i className="fas fa-search"></i>
        </form>

        <div className="compra-en-cuotas">
          <p>
            <i className="fas fa-hand-holding-usd"></i>Comprá en cuotas y sin tarjeta de crédito
          </p>
        </div>
      </section>
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
        <div className="burger-menu">
        <i className="fas fa-bars"></i>
      </div>
     
      </header>
    </div>
     <span className="banner"
     ><img src={ banner } alt="fotoBanner"
   /></span>
  
  </React.Fragment>);
}

export default NavBarProps;
