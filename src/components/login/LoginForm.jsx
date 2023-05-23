import React from 'react';



function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar el formulario
  };

  return (
    <main>
      <div>
        <form onSubmit={handleSubmit} className="form-login">
          <div>
            <input type="text" name="Usuario" placeholder="Nombre de usuario" required />
          </div>
          <div>
            <input type="password" name="Contraseña" placeholder="Contraseña" required />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </main>
  );
}

export default LoginForm;
