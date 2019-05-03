import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import http from "./services/httpService";
import config from "./config.json";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

class App extends Component {
  state = {
    countries: []
  };
  async componentDidMount() {
    const { data: countries } = await http.get(config.apiEndpoint);
    this.setState({ countries });
  }
  render() {
    return (
      <div>
        <ToastContainer />
        {this.state.countries.map(country => (
          <div key={country.alpha3Code}>
            <span>{country.name}</span>
            <span>{country.capital}</span>
            <span>{country.alpha3Code}</span>
            <span>{country.callingCodes}</span>
            <span>{country.population}</span>
            <span>{country.area}</span>
            <span>{country.region}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
