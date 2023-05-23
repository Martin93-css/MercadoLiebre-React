import React from "react";

import Footer from  '../components/common/Footer'
import NavBar from "../components/navbar/NavBar";
import HeroSection from  '../components/home/HeroSection'


function Home(){
    return(
        <React.Fragment>
		
         <NavBar /> 
        
        <HeroSection />
        
        <Footer />
        
        
        </React.Fragment>
    )

}
export default Home;