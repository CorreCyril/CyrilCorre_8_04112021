import React from "react";
import Footer from "./components/Footer";
import './App.css';
//fetch("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json")
//.then(response => console.log(response))
//.then(response2 => console.log(response2))

class App extends React.Component {
  
  render() {
    return (
    <div>
      <Footer />
    </div>)
  }
}
export default App;
