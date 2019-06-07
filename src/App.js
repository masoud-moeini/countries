import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import Countries from "./components/countries";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import CountryDetail from "./components/country-detail";

class App extends Component {
  state = {};
  render() {
    return (
      <main className="container">
        <Switch>
          <Route path="/:id" component={CountryDetail} />
          <Route path="/" component={Countries} />
        </Switch>
        <ToastContainer />
      </main>
    );
  }
}

export default App;
