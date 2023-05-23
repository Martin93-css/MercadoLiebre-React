import React from "react";
import Footer from "../components/common/Footer";
import NavBar from "../components/navbar/NavBar";
import RegisterForm from "../components/register/RegisterForm";

function Register() {
  return (
    <React.Fragment>
      
      <NavBar />
      <RegisterForm />
      <Footer />
    </React.Fragment>
  );
}

export default Register;
