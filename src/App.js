import React from "react";
import "./assets/css/App.css";
import ContentRowTop from "./components/ContentRowTop";
import ContentRowCenter from "./components/ContentRowCenter";
import Footer from './components/common/Footer'

function App() {
  return (
    <React.StrictMode>
      <ContentRowTop />
      <ContentRowCenter/>
      <Footer />
    </React.StrictMode>
  );
}

export default App;
