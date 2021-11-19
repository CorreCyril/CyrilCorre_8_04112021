import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Card.css";

class Card extends React.Component {

    render() {
        let id = "/Logement/" + this.props.Habitation.id
        
         
        return (
            <div className="Card">
                   
                    <NavLink to={id}>
                        {id}
                        <h1 className="Title">{this.props.Habitation.title}</h1>
                    </NavLink>
            </div>
                
            
            
                
            
    
        );

    }
    
};

export default Card;