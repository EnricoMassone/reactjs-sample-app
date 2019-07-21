import React from "react";
import PropTypes from "prop-types";

const searchBar = props => (
  <div>
    <input type="text" placeholder="Search..." value={props.filterText} /> <br />
    <label>
      <input type="checkbox" className="no-left-margin" checked={props.showOnlyProductsInStock} /> Only show products in stock
    </label>
  </div>
);

searchBar.propTypes = {
  filterText: PropTypes.string,
  showOnlyProductsInStock: PropTypes.bool
};

export default searchBar;