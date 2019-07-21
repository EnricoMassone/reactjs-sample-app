import React from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends React.Component {
  state = {
    filterText: "",
    showOnlyProductsInStock: false
  };

  updateFilterText = e => {
    const filterText = e.target.value;
    this.setState({
      filterText
    });
  };

  updateShowOnlyProductsInStock = e => {
    const showOnlyProductsInStock = e.target.checked;
    this.setState({
      showOnlyProductsInStock
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          showOnlyProductsInStock={this.state.showOnlyProductsInStock}
          onFilterTextChanged={this.updateFilterText}
          onShowOnlyProductsInStockChanged={this.updateShowOnlyProductsInStock} />

        <ProductTable
          filterText={this.state.filterText}
          showOnlyProductsInStock={this.state.showOnlyProductsInStock}
          products={this.props.products} />
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