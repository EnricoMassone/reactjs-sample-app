import React from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const filterableProductTable = props => (
  <div>
    <SearchBar />
    <ProductTable products={props.products} />
  </div>
);

filterableProductTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    stocked: PropTypes.bool
  }))
};

export default filterableProductTable;