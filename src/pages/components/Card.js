import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react"
import "./styles/Card.css";

class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            Titre: 0
        }
    }
    render() {
                
        return (
            <NavLink exact to="/Logement" className="Card">
                
                <h1 className="Title">{this.props.Habitation.title}</h1>
                
            </NavLink>
        );
    }
};

export default Card;