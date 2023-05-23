import React from 'react';

import Header from '../common/Header.jsx';
import '../../assets/css/App.css'


function NavBar() {
  const navIzquierda = ['Ofertas', 'Tienda Oficiales', 'Vender', 'Ayuda'];
  const navDerecha = ['Crear Cuenta', 'Ingresar', 'Mis Compras'];

  return (
    
      <Header enlacesIzquierda={navIzquierda}  enlacesDerecha={navDerecha} />
    
  );
}

export default NavBar;


