
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavEnlaces from '../common/Header';

function NavBar() {
  const navIzquierda = ['Ofertas', 'Tienda Oficiales', 'Vender', 'Ayuda'];
  const navDerecha = ['Crear Cuenta', 'Ingresar', 'Mis Compras'];

  return (
    <BrowserRouter>
      <NavEnlaces enlacesIzquierda={navIzquierda} enlacesDerecha={navDerecha} />
    </BrowserRouter>
  );
}

export default NavBar;
