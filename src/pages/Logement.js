import React from "react";
import Footer from "./components/Footer";
import Fiche from "./components/Fiche";
import Top from "./components/Top";
import Habitations from "./components/data/data";



import "./styles/Logement.css";

class Logement extends React.Component {
  render() {
    
    return (
    <div className="Logement">
        <Top />
        
        {Habitations.map(Habitation => <Fiche Habitation={Habitation} />)}
        
        <Footer />
    </div>)
  }
}

export default Logement;
