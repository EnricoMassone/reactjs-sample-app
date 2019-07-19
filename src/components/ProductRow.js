import React from "react";
import PropTypes from "prop-types";

const productRow = props => (
  <tr>
    <td>{props.product.name}</td>
    <td>{props.product.price}</td>
  </tr>
);

productRow.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    stocked: PropTypes.bool
  })
};

export default productRow;
