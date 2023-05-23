import React from "react";
import { BrowserRouter } from "react-router-dom";
import FeaturedProducts from "./FeaturedProducts";
import "../../assets/css/App.css";



function HeroSection() {
  return (
    <BrowserRouter>
      <main className="main">
        <section className="ultima-visita">
          <h2 className="titulares">Sección: Basado en tu última visita</h2>
          <FeaturedProducts />
        </section>
      </main>
    </BrowserRouter>
  );
}

export default HeroSection;
