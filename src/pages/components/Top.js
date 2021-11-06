import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./média/LOGO.png";
import "./styles/Top.css"

const Top = () => {
    return (
        <div className="Top">
            <div>
                <img alt="logo" src={Logo} className="logo" />
            </ div>
            <div className="Navigation">
                <NavLink exact to="/" className="nav" activeClassName="navActive">
                    <p>Accueil</p>
                </NavLink>
                <NavLink exact to="/A_propos" className="nav" activeClassName="navActive">
                    <p>A propos</p>
                </NavLink>

            </div>

            
            
            
        </div>
    );
};

export default Top;