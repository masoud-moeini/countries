import React, { Component } from "react";
import http from "../services/httpService";
import config from "../config.json";
import Country from "./country";

class Countries extends Component {
  state = {
    countries: []
  };
  async componentDidMount() {
    let { data: countries } = await http.get(config.apiEndpoint);
    countries = countries.map((country, index) => ({
      ...country,
      like: false,
      id: index
    }));
    this.setState({ countries });
  }

  handleLike = countryId => {
    console.log(countryId);
    const countries = this.state.countries.map(country =>
      country.id === countryId ? { ...country, like: !country.like } : country
    );
    this.setState({ countries });
  };

  // TODO: separate get service in another file and initilize countries by a method from that service
  render() {
    const { length } = this.state.countries;
    if (length === 0) return <p>Wait for Countries to be loaded</p>;
    return (
      <React.Fragment>
        <p>Showing {length} countries in the world</p>
        <div className="table">
          <div className="table-row table-head">
            <div>
              <span>Name</span>
            </div>
            <div>
              <span>Capital</span>
            </div>
            <div>
              <span>Alpha Code</span>
            </div>
            <div>
              <span>Calling Code</span>
            </div>
            <div>
              <span>Population</span>
            </div>
            <div>
              <span>Area (km2)</span>
            </div>
            <div>
              <span>Region</span>
            </div>
            <div />
            <div />
          </div>

          {this.state.countries.map(country => (
            <Country
              country={country}
              key={country.id}
              onLike={this.handleLike}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Countries;
