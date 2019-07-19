import React from "react";
import PropTypes from "prop-types";

const productCategoryRow = props => (
  <tr>
    <th colSpan="2">{props.category}</th>
  </tr>
);

productCategoryRow.propTypes = {
  category: PropTypes.string
};

export default productCategoryRow;
