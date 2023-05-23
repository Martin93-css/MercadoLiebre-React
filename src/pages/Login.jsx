import React from "react";
import Footer from  '../components/common/Footer'
import NavBar from "../components/navbar/NavBar";
import LoginForm from '../components/login/LoginForm'

function Login(){
    return(
        <React.Fragment>
		 <NavBar />
         <LoginForm /> 
         <Footer />
        
        
        
        </React.Fragment>
    )

}
export default Login;