import React, { Component } from "react";
import http from "../services/httpService";
import config from "../config.json";
import Country from "./country";
import Pagination from "./pagination";
import { paginate } from "./../utils/paginate";
import db from "./../utils/db";

class Countries extends Component {
  state = {
    countries: [],
    pageSize: 10,
    currentPage: 1
  };
  componentDidMount() {
    db.table("countries")
      .toArray()
      .then(countries => {
        if (countries.length > 0) {
          this.setState({ countries });
        } else {
          this.getCountries();
        }
      });
  }

  async getCountries() {
    let { data: countries } = await http.get(config.apiEndpoint);
    countries = countries.map((country, index) => ({
      ...country,
      like: false
    }));

    db.countries.bulkAdd(countries).then(id => {
      db.table("countries")
        .toArray()
        .then(countries => {
          this.setState({ countries });
        });
    });
  }

  handleLike = countryId => {
    var _this = this;
    db.countries.get(countryId).then(function(country) {
      const like = !country.like;
      db.table("countries")
        .update(countryId, { like })
        .then(() => {
          db.table("countries")
            .toArray()
            .then(countries => {
              _this.setState({ countries });
            });
        });
    });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  // TODO: separate get service in another file and initilize countries by a method from that service
  render() {
    const { length } = this.state.countries;
    const { pageSize, currentPage, countries: allCountries } = this.state;
    if (length === 0) return <p>Wait for Countries to be loaded</p>;

    const countries = paginate(allCountries, currentPage, pageSize);
    console.log(countries);
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

          {countries.map(country => (
            <Country
              country={country}
              key={country.id}
              onLike={this.handleLike}
            />
          ))}
        </div>
        <Pagination
          itemsCount={length}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}

export default Countries;
