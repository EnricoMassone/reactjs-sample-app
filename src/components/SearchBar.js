import React from "react";
import PropTypes from "prop-types";

const searchBar = props => (
  <div>
    <input type="text" placeholder="Search..." /> <br />
    <label>
      <input type="checkbox" className="no-left-margin" /> Only show products in stock
    </label>
  </div>
);

searchBar.propTypes = {

};

export default searchBar;