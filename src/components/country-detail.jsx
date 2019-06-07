import React, { Component } from "react";
import db from "./../utils/db";
import _ from "lodash";
import "../assets/sass/components/country-detail.scss";
import { Link } from "react-router-dom";

class CountryDetail extends Component {
  state = {
    country: {}
  };
  componentDidMount() {
    db.table("countries").get(parseInt(this.props.match.params.id), country => {
      this.setState({ country });
    });
  }

  render() {
    const { country } = this.state;

    if (_.isEmpty(country)) {
      return <div />;
    } else {
      return (
        <div className="country-box">
          <Link to={"/"}>
            <button>Back</button>
          </Link>
          <div className="flag">
            <img src={country.flag} alt="" />
          </div>
          <p>{"Name: " + country.name}</p>
          <p>{"Capital: " + country.capital}</p>
          <p>{"Domain: " + country.topLevelDomain}</p>
          <p>{"Alpha Code: " + country.alpha3Code}</p>
          <p>{"Calling Code: " + country.callingCodes}</p>
          <p>{country.latlng}</p>
          <p>{"Area: " + country.area.toLocaleString() + "(km2)"}</p>
          <p>{"Population: " + country.population.toLocaleString()}</p>
          <p>{"Timezone(s): " + country.timezones}</p>
          <p>{"Region: " + country.region}</p>
          <p>{"Border(s): " + country.borders}</p>
          <p>{"Currencie(s): " + country.currencies[0].name}</p>
          <p>{"Language(s): " + country.languages[0].name}</p>
        </div>
      );
    }
  }
}

export default CountryDetail;
