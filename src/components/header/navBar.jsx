import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './navBarProps';

function menuNavBar() {
  return (
    <BrowserRouter>
      <NavBar enlaces={['Ofertas' , 'Tienda Oficiales' , 'Vender' ,'Ayuda']} />
    </BrowserRouter>
  );
}

export default menuNavBar;

