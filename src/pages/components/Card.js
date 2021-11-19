import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Card.css";

class Card extends React.Component {

    render() {
        let id = "/Logement/" + this.props.Habitation.id
        
         
        return (
            <NavLink to={id} className="Card">
                
                <h1 className="Title">{this.props.Habitation.title}</h1>
                
            </NavLink>
        );

    }
    
};

export default Card;