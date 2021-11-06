import React from "react";
import Footer from "./components/Footer";
import Top from "./components/Top";
import Picture from "./components/Picture";
import "./styles/Home.css";

class Home extends React.Component {
  
  render() {
    return (
    <div className="Home">
      <Top />
      <Picture />
      <Footer />
    </div>)
  }
}

export default Home;
