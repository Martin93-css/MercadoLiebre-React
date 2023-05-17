import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './navBarProps';

function menuNavBar() {
  
  const navIzquierda = ['Ofertas' , 'Tienda Oficiales' , 'Vender' ,'Ayuda'];
  const navDerecha = ['Crear Cuenta' , 'Ingresar' , 'Mis Compras'];
  
  return (
    <BrowserRouter>
      
      <NavBar enlacesIzquierda={navIzquierda} enlacesDerecha={navDerecha}/>
      
 </BrowserRouter>
  );
}

export default menuNavBar;

