import React, { Component } from "react";
import Country from "./country";
import TableHeader from "./tableHeader";

class CountriesTable extends Component {
  columns = [
    { key: "name", label: "Name" },
    { key: "capital", label: "Capital" },
    { key: "alpha3Code", label: "Alpha Code" },
    { key: "callingCodes", label: "Calling Code" },
    { key: "population", path: "population", label: "Population" },
    { key: "area", path: "area", label: "Area (km2)" },
    { key: "Region" },
    { key: "like" },
    { key: "detail" }
  ];

  render() {
    const { countries, onLike, sortColumn, onSort } = this.props;
    return (
      <div className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />

        {countries.map(country => (
          <Country country={country} key={country.id} onLike={onLike} />
        ))}
      </div>
    );
  }
}

export default CountriesTable;
