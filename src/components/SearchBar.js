import React from "react";
import PropTypes from "prop-types";

const searchBar = props => (
  <form>
    <input
      type="text"
      placeholder="Search..."
      value={props.filterText}
      onChange={props.onFilterTextChanged} />

    <br />

    <label>
      <input
        type="checkbox"
        className="no-left-margin"
        checked={props.showOnlyProductsInStock}
        onChange={props.onShowOnlyProductsInStockChanged} /> Only show products in stock
    </label>
  </form>
);

searchBar.propTypes = {
  filterText: PropTypes.string,
  showOnlyProductsInStock: PropTypes.bool,
  onFilterTextChanged: PropTypes.func,
  onShowOnlyProductsInStockChanged: PropTypes.func,
};

export default searchBar;