import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = path => {
    if (path === undefined) {
      return;
    }
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
    return (
      <div className="table-row table-head">
        {this.props.columns.map(column => (
          <div
            key={column.path || column.key}
            onClick={() => this.raiseSort(column.path)}
          >
            <span>{column.label}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default TableHeader;
