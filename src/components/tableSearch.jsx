import React, { Component } from "react";

class TableSearch extends Component {
  state = {};

  render() {
    return (
      <div className="search-row">
        <div>
          <input
            onChange={this.props.inputChanges}
            value={this.props.userInputs.nameSearch}
            type="text"
            placeholder="search by name"
            name="nameSearch"
          />
        </div>
        <div>
          <input
            onChange={this.props.inputChanges}
            value={this.props.userInputs.capitalSearch}
            type="text"
            placeholder="search by capital"
            name="capitalSearch"
          />
        </div>
      </div>
    );
  }
}

export default TableSearch;
