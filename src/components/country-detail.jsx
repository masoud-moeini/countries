import React, { Component } from "react";
import db from "./../utils/db";
import _ from "lodash";
import "../assets/sass/components/country-detail.scss";
import { Link } from "react-router-dom";

class CountryDetail extends Component {
  state = {
    country: {},
    borderLinks: []
  };
  componentDidMount() {
    this.getClickCountry();
    // this.getBorderLink();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getClickCountry();
    }
  }

  getClickCountry() {
    db.table("countries").get(parseInt(this.props.match.params.id), country => {
      this.setState({ country });
    });
  }

  // getBorderLink(border) {
  //   let borderLinks = [];
  //   console.log(this.state.borderLinks[5]);
  //   db.table("countries")
  //     .where("alpha3Code")
  //     .equalsIgnoreCase(border)
  //     .each(country => {
  //       borderLinks.push(country.id);
  //     })
  //     .then(() => {
  //       console.log(borderLinks);
  //     })
  //     .catch(function(error) {
  //       console.error(error);
  //     });
  // }

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
          <p>
            <span className="list">
              <span className="title">Name: </span>
              <span>{country.name}</span>
            </span>
          </p>
          <p>
            <span className="list">
              <span className="title">Capital: </span>
              <span>{country.capital}</span>
            </span>
          </p>
          <p>
            <span className="list">
              <span className="title">Domain: </span>
              <span>{country.topLevelDomain[0]}</span>
            </span>
          </p>
          <p>
            <span className="list">
              <span className="title">Alpha Code: </span>
              <span>{country.alpha3Code}</span>
            </span>
          </p>
          <p>
            <span className="list">
              <span className="title">Calling Code: </span>
              <span>{country.callingCodes[0]}</span>
            </span>
          </p>
          <p>
            <span className="list">
              <span className="title">Latitude: </span>
              <span>{country.latlng[0]}</span>
              <span className="title">Longitude: </span>
              <span>{country.latlng[1]}</span>
            </span>
          </p>
          <p>
            <span className="list">
              <span className="title">Area: </span>
              <span>{country.area.toLocaleString() + "(km2)"}</span>
            </span>
          </p>
          <p>
            <span className="list">
              <span className="title">Population: </span>
              <span>{country.population.toLocaleString()}</span>
            </span>
          </p>
          <p>
            <span className="list">
              <span className="title">Timezone(s): </span>

              {country.timezones.map(timezone => (
                <span key={timezone}>{timezone}</span>
              ))}
            </span>
          </p>
          <p>
            <span className="list">
              <span className="title">Region:</span>
              <span>{country.region}</span>
            </span>
          </p>
          <p>
            <span className="list">
              <span className="title">Border(s): </span>

              {country.borders.map((border, index) => (
                <span key={border}>
                  <Link to={"/"}>{border}</Link>
                </span>
              ))}
            </span>
          </p>
          <p>
            <span className="list">
              <span className="title">Currencie(s): </span>
              {country.currencies.map(currency => (
                <span key={currency.name}>{currency.name}</span>
              ))}
            </span>
          </p>

          <p>
            <span className="list">
              <span className="title">Language(s): </span>
              {country.languages.map(language => (
                <span key={language.name}>{language.name}</span>
              ))}
            </span>
          </p>
        </div>
      );
    }
  }
}

export default CountryDetail;
