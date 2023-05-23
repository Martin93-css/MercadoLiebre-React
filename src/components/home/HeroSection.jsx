import React from "react";

import FeaturedProducts from "./FeaturedProducts";
/* import "../../assets/css/App.css"; */



function HeroSection() {
  return (
    
      <main className="main">
        <section className="ultima-visita">
          <h2 className="titulares">Sección: Basado en tu última visita</h2>
          <FeaturedProducts />
        </section>
      </main>
    
  );
}

export default HeroSection;
