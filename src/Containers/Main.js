import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Products from "../pages/Products";
import Makers from "../pages/Makers";
import Cart from "../pages/Cart";
import Login from "../pages/LoginForm";
import AddSeller from "../pages/AddSeller";
import About from "../pages/About";
import Preview from "../pages/Preview";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/kotisivu" component={Landing} />
        <Route path="/tuotteet" component={Products} />
        <Route path="/artesaanit" component={Makers} />
        <Route path="/meistä" component={About} />
        <Route path="/ostoskori" component={Cart} />
        <Route path="/kirjaudu" component={Login} />
        <Route path="/register" component={AddSeller} />
        <Route path="/kassalle" component={Preview} />
      </Switch>
    </main>
  );
};

export default Main;
