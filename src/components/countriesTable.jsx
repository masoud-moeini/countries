import React, { Component } from "react";
import Country from "./country";

class CountriesTable extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "desc";
    }

    this.props.onSort(sortColumn);
  };
  render() {
    const { countries, onLike } = this.props;
    return (
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
          <div onClick={() => this.raiseSort("population")}>
            <span>Population</span>
          </div>
          <div onClick={() => this.raiseSort("area")}>
            <span>Area (km2)</span>
          </div>
          <div>
            <span>Region</span>
          </div>
          <div />
          <div />
        </div>

        {countries.map(country => (
          <Country country={country} key={country.id} onLike={onLike} />
        ))}
      </div>
    );
  }
}

export default CountriesTable;
