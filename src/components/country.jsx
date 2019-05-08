import React, { Component } from "react";

class Country extends Component {
  state = {};

  openCountry = country => {
    console.log(country);
  };
  render() {
    return (
      <div className="table-row">
        <div>
          <span className="country-name">{this.props.country.name}</span>
        </div>
        <div>
          <span>{this.props.country.capital}</span>
        </div>
        <div>
          <span>{this.props.country.alpha3Code}</span>
        </div>
        <div>
          <span>{this.props.country.callingCodes}</span>
        </div>
        <div>
          <span>{this.props.country.population}</span>
        </div>
        <div>
          <span>{this.props.country.area}</span>
        </div>
        <div>
          <span>{this.props.country.region}</span>
        </div>
        <div>
          <span onClick={() => this.props.onLike(this.props.country.id)}>
            like
          </span>
        </div>
        <div>
          <button onClick={() => this.openCountry(this.props.country)}>
            Know more
          </button>
        </div>
      </div>
    );
  }
}

export default Country;
