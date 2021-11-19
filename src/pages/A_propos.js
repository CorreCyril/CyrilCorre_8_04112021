import React from "react";
import Footer from "./components/Footer";
import Top from "./components/Top";
import Picture2 from "./components/Picture2";
import './styles/A_propos.css';

class A_propos extends React.Component {
   
  render() {
    return (
    <div className="A_propos">
      <Top />
      <Picture2 />
      
      
      <Footer />
    </div>)
  }
}

export default A_propos;
