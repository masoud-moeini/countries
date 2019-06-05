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

  renderSortIcon = column => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="icon-chevron-up" />;
    return <i className="icon-chevron-down" />;
  };

  render() {
    return (
      <div className="table-row table-head">
        {this.props.columns.map(column => (
          <div
            key={column.path || column.key}
            onClick={() => this.raiseSort(column.path)}
            className={
              column.key === "area" || column.key === "population"
                ? "cursor-pointer"
                : ""
            }
          >
            <span>
              {column.label} {this.renderSortIcon(column)}
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default TableHeader;
