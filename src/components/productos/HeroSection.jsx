import React from "react";
import { BrowserRouter } from "react-router-dom";
import ProductosInDb from "./FeaturedProducts";
import "../../assets/css/App.css";
function HeroSection() {
  return (
    <BrowserRouter>
      <main className="main">
        <section className="ultima-visita">
          <h2 className="titulares">Sección: Basado en tu última visita</h2>
          <ProductosInDb />
        </section>
      </main>
    </BrowserRouter>
  );
}

export default HeroSection;
