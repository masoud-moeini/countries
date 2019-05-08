import React, { Component } from "react";
import Like from "./like";

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
          <Like
            liked={this.props.country.like}
            onLikeToggle={() => this.props.onLike(this.props.country.id)}
          />
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
