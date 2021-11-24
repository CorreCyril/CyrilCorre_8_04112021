import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import "./styles/DropDown.css";

class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            Show: false,
            ShowArrow: true
        };
    }
    ShowDiv() {
        this.setState({
            Show: true,
            ShowArrow: false
        });
    }
    NoShowDiv() {
        this.setState({
            Show: false,
            ShowArrow: true
        });
    }
    render() {
        const {Show} = this.state
        const {ShowArrow} = this.state
        
        return (
            <div className="DropDown">
                <div className="BlocRed">
                    <div className="Props">
                        {this.props.Description}
                        {this.props.Equipements}
                        {this.props.Fiabilité}
                        {this.props.Respect}
                        {this.props.Service}
                        {this.props.Responsabilité}
                    </div>
                    {ShowArrow && (
                    <div className="Chevron">
                        <i className="fa fa-chevron-down" onClick={()=> this.ShowDiv()}></i>
                    </div>)}
                    {Show && (
                    <div className="Chevron">
                        <i className="fa fa-chevron-up" onClick={()=> this.NoShowDiv()}></i>
                    </div>)}
                </div>
                {Show && (
                <div className="BlocGrey">
                    <div className="PropsTxt">
                        {this.props.DescriptionContent}
                        {this.props.EquipementsContent}
                        {this.props.RespectContent}
                    </div>

                </div>)}
               
            </div>
        )
    }
    
};

export default DropDown;