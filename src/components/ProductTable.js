import React from 'react';
import PropTypes from 'prop-types';

const productTable = (props) => {};

productTable.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.string,
        stocked: PropTypes.bool,
        category: PropTypes.string
    }))

};

export default productTable;