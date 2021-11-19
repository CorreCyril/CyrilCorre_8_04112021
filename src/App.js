import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import A_propos from "./pages/A_propos";
import Logement from "./pages/Logement"
import NotFound from "./pages/NotFound";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/A_propos' exact component={A_propos} />
        <Route path="/Logement/:id" exact component={Logement} />
        <Route path="/*" component={NotFound} />
      </Switch>
    
    </BrowserRouter>
  )
}
export default App;
