import React from "react";
import Top from "./components/Top";
import Footer from "./components/Footer";
import { NavLink } from "react-router-dom";
import "./styles/NotFound.css";

function NotFound() {
  return (
    <div className="NotFound">
      <Top />
      <div className="Div--error">
        <h1 className="Error">404</h1>
        <p className="String">Oups! La page que vous demandez n'existe pas.</p>
        <NavLink exact to="/" className="link">
          <p>Retourner sur la page d’accueil</p>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
}
export default NotFound;
