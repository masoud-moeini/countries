import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import "../assets/sass/components/pagination.scss";

class Pagination extends Component {
  // refs is not working as should
  // input sho9uld be two way bind
  state = {
    currentPage: this.props.currentPage
  };

  handleChangeText = e => {
    console.log(e.target.value);
    this.setState({ currentPage: e.target.value });
  };
  preventDefault(e) {
    e.preventDefault();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentPage !== this.props.currentPage) {
      this.setState({ currentPage: this.props.currentPage });
    }
  }

  render() {
    const {
      itemsCount,
      pageSize,
      onPageChange,
      currentPage,
      firstIcon,
      lastIcon,
      goToIcon,
      firstText,
      lastText,
      goToText
    } = this.props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);
    return (
      <nav>
        <ul className="pagination">
          <li className={"page-item " + (currentPage === 1 ? "disabled" : "")}>
            <span onClick={() => onPageChange(1)} className="page-link">
              <i className={firstIcon} />
              {!firstIcon ? (
                <span>{firstText ? firstText : "First"}</span>
              ) : null}
            </span>
          </li>
          {currentPage > 3 ? (
            <li className="page-item disabled">
              <span className="page-link">...</span>
            </li>
          ) : null}

          {pages.map(page => {
            return currentPage - page < 3 && page - currentPage < 3 ? (
              <li
                className={
                  page === currentPage ? "page-item active" : "page-item"
                }
                key={page}
              >
                <span onClick={() => onPageChange(page)} className="page-link">
                  {page}
                </span>
                {currentPage === page ? (
                  <form
                    action="#"
                    onSubmit={e => {
                      this.preventDefault(e);
                      onPageChange(parseInt(this.state.currentPage));
                    }}
                  >
                    <span>
                      <input
                        type="tel"
                        value={this.state.currentPage}
                        onChange={e => this.handleChangeText(e)}
                      />
                      {/* <span> ${pageCount}</span> */}
                      <button type="submit">
                        <i className={goToIcon} />
                        {!goToIcon ? (
                          <span>{goToText ? goToText : "Go"}</span>
                        ) : null}
                      </button>
                    </span>
                  </form>
                ) : null}
              </li>
            ) : null;
          })}

          {pagesCount - currentPage > 3 ? (
            <li className="page-item disabled">
              <span className="page-link">...</span>
            </li>
          ) : null}

          <li
            className={
              "page-item " + (currentPage === pagesCount ? "disabled" : "")
            }
          >
            <span
              onClick={() => onPageChange(pagesCount)}
              className="page-link"
            >
              <i className={lastIcon} />
              {!lastIcon ? <span>{lastText ? lastText : "Last"}</span> : null}
            </span>
          </li>
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
