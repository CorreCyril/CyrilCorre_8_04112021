import React from "react";
import Habitations from "./components/data/data";
import Footer from "./components/Footer";
import Top from "./components/Top";
import Tags from "./components/Tags";
import StarRed from "./components/StarRed";
import StarGrey from "./components/StarGrey";
import DropDown from "./components/DropDown";
import 'font-awesome/css/font-awesome.min.css';
import "./styles/Logement.css";


class Logement extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      Logement: Habitations.find(Habitation => Habitation.id === this.props.match.params.id),
      Pictures: 0
    };
  }
  addone() {
    if (this.state.Pictures < this.state.Logement.pictures.length - 1) {
      this.setState({
        Pictures: this.state.Pictures + 1
      });
    }
    else {
      this.setState({
        Pictures: 0
      });
    }
  }
  deleteone() {
    if (this.state.Pictures !== 0) {
      this.setState({
        Pictures: this.state.Pictures - 1
      });
    }
    else {
      this.setState({
        Pictures: this.state.Logement.pictures.length - 1
      });
    }
  }
  render() {
    let n = parseFloat(this.state.Logement.rating)
         
    return (
    <div className="Logement">
        <Top />
        <div className="Logement--content">
          <div className="Cover">
            <p className="Txt--page">{this.state.Pictures + 1}/{this.state.Logement.pictures.length}</p>
            <i className="fa fa-chevron-left chevron left" onClick={() => this.deleteone()}></i>
            <i className="fa fa-chevron-right chevron right" onClick={() => this.addone()}></i>
            <img className="Cover--img" src={this.state.Logement.pictures[this.state.Pictures]} alt="pictures" />
          </div>
          <div className="Logement--top">
            <div className="Title--container">
              <div>
                <h1 className="Title--content">{this.state.Logement.title}</h1>
                <p className="Location">{this.state.Logement.location}</p>
              </div>
              <div className="DivTags">
                {this.state.Logement.tags.map(elt => <Tags elt={elt} />)}
              </div>
            </div>
            <div className="UnderTitle">
              <div className="Profil">
                <p className="Name">{this.state.Logement.host.name}</p>
                <img className="Profil--img" src={this.state.Logement.host.picture} alt="profil" />
              </div>
              <div className="Rating">
                {[...Array(n)].map(() => <StarRed />)}
                {[...Array(5 - n)].map(() => <StarGrey />)} 
              </div>
            </div>
          </div>
          <div className="Arrows">
            <div className="Arrows--content">
              <DropDown key={this.state.Logement.id} Description="Description" DescriptionContent={this.state.Logement.description} />
            </div>
            <div className="Arrows--content">
              <DropDown Equipements="Equipements" EquipementsContent={this.state.Logement.equipments.map((elt)=>(<p className="EltEquipment">{elt}</p>))} />
            </div>

          </div>

        </div>


        
        
        <Footer />
    </div>)
  }
}

export default Logement;
