import React from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: "",
      showOnlyProductsInStock: false
    };
  }

  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText} showOnlyProductsInStock={this.state.showOnlyProductsInStock} />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}

FilterableProductTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    stocked: PropTypes.bool
  }))
};

export default FilterableProductTable;