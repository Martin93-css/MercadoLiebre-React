import React from "react";

const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <article>
          <i className="fas fa-credit-card iconos-footer"></i>
          <h3 className="titulo-footer">Pagá con tarjeta o en efectivo</h3>
          <p className="parrafo-footer">
            Con Mercado Liebre Cash, tenés cuotas sin interés con tarjeta o
            efectivo en puntos de pago. ¡Y siempre es seguro!
          </p>
        </article>
        <article>
          <i className="fas fa-gift iconos-footer"></i>
          <h3 className="titulo-footer">Envío gratis desde $ 2.500</h3>
          <p className="parrafo-footer">
            Solo por estar registrad@ en Mercado Liebre tenés envíos gratis en
            miles de productos. Es un beneficio de Mercado Puntos.
          </p>
        </article>
        <article>
          <i className="fas fa-user-shield iconos-footer"></i>
          <h3 className="titulo-footer">Seguridad, de principio a fin</h3>
          <p className="parrafo-footer">
            ¿No te gusta? ¡Devolvelo! En Mercado Liebre, no hay nada que no
            puedas hacer, porque estás siempre protegid@.
          </p>
        </article>
      </section>
      <span className="copyright">
        Copyright © 1999-2020 MercadoLiebre S.R.L.
      </span>
    </footer>
  );
};

export default Footer;
