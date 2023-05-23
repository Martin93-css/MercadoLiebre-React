import React from 'react';

function RegisterForm() {
  return (
    <main className="main">
      <section> 
        <form action="/registrar" method="POST">
          <div className="form-control">
            <input type="text" placeholder="Nombre y Apellido" required/>
          </div>
          <div className="form-control">
            <input type="text" placeholder="Nombre de Usuario" required/>
          </div>
          <div className="form-control">
            <input type="email" placeholder="E-mail" required/>
          </div>
          <div>
            <h2>Fecha de nacimiento</h2>
            <input type="date" placeholder="mm/dd/yyyy" className="calendario"/>
            <input type="text" placeholder="Domicilio" />
          </div>
          <fieldset className="tipoUsuario">
            <legend>Perfil de Usuario</legend>
            <br />
            <label htmlFor="compra-venta">
              <input type="radio" name="comprar-vender" id="compra-venta" value="compra-venta" required/>
              Comprador
            </label>
            <label htmlFor="compra-venta">
              <input type="radio" name="comprar-vender" id="compra-venta" value="compra-venta" required/>
              Vendedor
            </label>
          </fieldset>
      
          <h2>Foto de perfil</h2>
          <br />
          <div className="subir-imagen">
            <input type="file" name="imagen-perfil" id="image" />
            <label htmlFor="image"></label>
          </div>
          <div className="form-control">
            <input
              type="password"
              name="contraseña"
              placeholder="Contraseña"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              name="contraseña"
              placeholder="Repetir contraseña"
              required
            />
          </div>
          <div className="registro">
            <button type="submit" className="boton-registro">Registrarse</button>
            <button type="reset" className="boton-registro">Borrar Todo</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default RegisterForm;
