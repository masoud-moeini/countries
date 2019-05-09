import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import "../assets/sass/components/pagination.scss";

class Pagination extends Component {
  state = {};

  render() {
    const { itemsCount, pageSize, onPageChange, currentPage } = this.props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);
    return (
      <nav>
        <ul className="pagination">
          {pages.map(page => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
              key={page}
            >
              <span onClick={() => onPageChange(page)} className="page-link">
                {page}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Pagination;
