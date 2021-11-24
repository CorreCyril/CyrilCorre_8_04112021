import React from "react";
import "./styles/Tags.css";

class Tags extends React.Component {

    render() {
        return (
            <div className="Tags">
               {this.props.elt}
            </div>
        )
    }
    
};

export default Tags;