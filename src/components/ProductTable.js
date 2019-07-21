import React from 'react';
import PropTypes from 'prop-types';
import { groupBy } from 'lodash';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const productTable = (props) => {
  let filteredProducts = props.products;

  if (props.filterText) {
    filteredProducts = filteredProducts.filter(product => product.name.includes(props.filterText));
  }

  if (props.showOnlyProductsInStock) {
    filteredProducts = filteredProducts.filter(product => product.stocked);
  }

  const productsByCategory = groupBy(filteredProducts, product => product.category);

  return (
    <table>

      <thead>
        <tr className="text-left-aligned">
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        {
          Object.keys(productsByCategory).flatMap(category => {
            const categoryRow = <ProductCategoryRow key={category} category={category} />;

            const productsInCategory = productsByCategory[category].map(({ name, price, stocked }) =>
              ({ name, price, stocked })
            );
            const productsRows = productsInCategory.map(product =>
              <ProductRow product={product} key={`${category}-${product.name}`} />
            );

            return [categoryRow, ...productsRows];
          })
        }
      </tbody>

    </table>
  );
};

productTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    stocked: PropTypes.bool,
    category: PropTypes.string
  })),
  filterText: PropTypes.string,
  showOnlyProductsInStock: PropTypes.bool
};

export default productTable;