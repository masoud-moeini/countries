import React, { Component } from "react";
import Like from "./like";
import { Link } from "react-router-dom";

class Country extends Component {
  state = {};

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
          <span>{this.props.country.population.toLocaleString()}</span>
        </div>
        <div>
          <span>{this.props.country.area.toLocaleString()}</span>
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
          <Link className="more-button" to={"/" + this.props.country.id}>
            Know more
          </Link>
        </div>
      </div>
    );
  }
}

export default Country;
