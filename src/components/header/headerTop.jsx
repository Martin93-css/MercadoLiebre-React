import React from 'react';
import logo from '../../assets/images/logo-mercado-liebre.svg'
import '../../assets/css/App.css';

function HeaderTop(props) {
  return (
    <React.StrictMode>
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
  
     </React.StrictMode>
  );
}

export default HeaderTop;
