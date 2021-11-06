import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import A_propos from "./pages/A_propos";
import NotFound from "./pages/NotFound";
import './App.css';
//fetch("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json")
//.then(response => console.log(response))
//.then(response2 => console.log(response2))

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/A_propos' exact component={A_propos} />
        <Route component={NotFound} />
      </Switch>
    
    </BrowserRouter>
  )
}
export default App;
