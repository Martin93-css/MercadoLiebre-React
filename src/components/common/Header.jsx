import React from "react";
import { Link } from "react-router-dom";
import banner from '../../assets/images/img-home-banner.jpg'
import logo from '../../assets/images/logo-mercado-liebre.svg'



function Header(props) {

  console.log(props.enlacesIzquierda)
  return (
    <React.Fragment>
   <div>
   <section className="header-top">
        <div className="imagen-mercado-libre">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <form method="get" action="/search" className="search-bar">
  <div className="bottom-search">
    <input type="text" placeholder="Search show" name="search" />
  </div>
  <div className="bottom-search">
    <button type="submit" className="search-button">
      <i className="fas fa-search" id="search-icon"></i>
    </button>
  </div>
</form>



        <div className="compra-en-cuotas">
          <p>
            <i className="fas fa-hand-holding-usd"></i>Comprá en cuotas y sin tarjeta de crédito
          </p>
        </div>
      </section>
      <header></header>
        {/* Ejemplo de enlace interno */}
        <nav className="main-navbar">
          <ul className="navbar-derecho">
            <li>
              {props.enlacesIzquierda.map((enlace, i) => (
                <Link to={"/" + enlace.toLowerCase().replace(" ", "-")} key={enlace + i}> {enlace} </Link>
              ))}
            </li>
          </ul>
          <ul className="navbar-izquierdo">
            <li> {props.enlacesDerecha.map((enlace, i) => (
                <Link to={"/" + enlace.toLowerCase().replace(" ", "-")} key={enlace + i}> {enlace} </Link>
              ))} </li>
          </ul>
        </nav>
        <div className="burger-menu">
        <i className="fas fa-bars"></i>
      </div>
     
      
    </div>
     <span className="banner"
     ><img src={ banner } alt="fotoBanner"
   /></span>
  
  </React.Fragment>);
}

export default Header;