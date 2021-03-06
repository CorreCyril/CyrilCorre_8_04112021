import React from "react";
import Footer from "./components/Footer";
import Top from "./components/Top";
import Picture from "./components/Picture";
import Card from "./components/Card";
import Habitations from "./components/data/data";
import "./styles/Home.css";

class Home extends React.Component {
  render() {
    return (
    <div className="Home">
      <Top />
      <Picture />
      
      <div className="Home--content">
        {Habitations.map(Habitation => <Card Habitation={Habitation} key={Habitation.id} />)}
        

      </div>
      
      <Footer />
    </div>)
  }
}

export default Home;
