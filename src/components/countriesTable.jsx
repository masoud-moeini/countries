import React, { Component } from "react";
import Country from "./country";
import TableHeader from "./tableHeader";
import TableSearch from "./tableSearch";

class CountriesTable extends Component {
  columns = [
    { key: "name", label: "Name" },
    { key: "capital", label: "Capital" },
    { key: "alpha3Code", label: "Alpha Code" },
    { key: "callingCodes", label: "Calling Code" },
    { key: "population", path: "population", label: "Population" },
    { key: "area", path: "area", label: "Area (km2)" },
    { key: "Region", label: "Region" },
    { key: "like" },
    { key: "detail" }
  ];

  render() {
    const { countries, onLike, sortColumn, onSort, inputChanges } = this.props;
    return (
      <div className="table">
        <TableSearch
          inputChanges={inputChanges}
          userInputs={this.props.userInputs}
        />
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
