import React from "react";
import Footer from "./components/Footer";
import Fiche from "./components/Fiche"
import Top from "./components/Top";
import "./styles/Logement.css";

class Logement extends React.Component {
  render() {
    return (
    <div className="Logement">
        <Top />
        <Fiche />
        <Footer />
    </div>)
  }
}

export default Logement;
