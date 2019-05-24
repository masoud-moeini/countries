import React, { Component } from "react";
import http from "../services/httpService";
import config from "../config.json";
import Pagination from "./pagination";
import { paginate } from "./../utils/paginate";
import db from "./../utils/db";
import ShowLiked from "./showLiked";
import CountriesTable from "./countriesTable";
import _ from "lodash";

class Countries extends Component {
  state = {
    countries: [],
    pageSize: 10,
    currentPage: 1,
    toSelectCategory: "liked",
    sortColumn: { path: "population", order: "desc" }
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
    countries = countries.map((country, index) => {
      let area = country.area;
      if (area === null) {
        area = 0;
      }

      return {
        ...country,
        like: false,
        area: area
      };
    });

    db.countries.bulkAdd(countries).then(id => {
      db.table("countries")
        .toArray()
        .then(countries => {
          this.setState({ countries });
        });
    });
  }

  handleLike = countryId => {
    db.countries.get(countryId).then(country => {
      const like = !country.like;
      db.table("countries")
        .update(countryId, { like })
        .then(() => {
          db.table("countries")
            .toArray()
            .then(countries => {
              this.setState({ countries });
            });
        });
    });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleFilter = () => {
    if (this.state.toSelectCategory === "all") {
      this.setState({ toSelectCategory: "liked", currentPage: 1 });
    } else {
      this.setState({ toSelectCategory: "all", currentPage: 1 });
    }
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  // TODO: separate get service in another file and initilize countries by a method from that service
  render() {
    const { length } = this.state.countries;
    const {
      pageSize,
      currentPage,
      countries: allCountries,
      toSelectCategory,
      sortColumn
    } = this.state;

    if (length === 0) return <p>Wait for Countries to be loaded</p>;

    const filtered =
      toSelectCategory === "all"
        ? allCountries.filter(m => m.like)
        : allCountries;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const countries = paginate(sorted, currentPage, pageSize);
    return (
      <React.Fragment>
        <div className="table-title">
          <span>Showing {filtered.length} countries in the world</span>
          <ShowLiked
            toSelectItem={toSelectCategory}
            onButtonSelect={this.handleFilter}
          />
        </div>

        <CountriesTable
          countries={countries}
          sortColumn={sortColumn}
          onLike={this.handleLike}
          onSort={this.handleSort}
        />
        <Pagination
          itemsCount={filtered.length}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}

export default Countries;
