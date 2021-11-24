import React from "react";
import Footer from "./components/Footer";
import Top from "./components/Top";
import Picture2 from "./components/Picture2";
import DropDown from "./components/DropDown";
import './styles/A_propos.css';

class A_propos extends React.Component {
   
  render() {
    return (
    <div className="A_propos">
      <Top />
      <Picture2 />
      <div className="ContentDrop">
        <DropDown Fiabilité="Fiabilité" />
        <DropDown Respect="Respect" RespectContent="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
        <DropDown Service="Service" />
        <DropDown Responsabilité="Responsabilité" />
      </div> 
      <Footer />
    </div>)
  }
}

export default A_propos;
