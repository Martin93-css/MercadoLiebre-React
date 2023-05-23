import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../common/Header.jsx';
import '../../assets/css/App.css'


function NavBar() {
  const navIzquierda = ['Ofertas', 'Tienda Oficiales', 'Vender', 'Ayuda'];
  const navDerecha = ['Crear Cuenta', 'Ingresar', 'Mis Compras'];

  return (
    <BrowserRouter>
      <Header enlacesIzquierda={navIzquierda}  enlacesDerecha={navDerecha} />
    </BrowserRouter>
  );
}

export default NavBar;


