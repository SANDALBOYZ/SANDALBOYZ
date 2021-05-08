import React from 'react';

export const defaultProductsContext = {
  activeFilters: {
    collection: [],
    productType: [],
  },
  activeSort: 'CREATED_AT',
  showFilters: false,
  sortedProductIds: [],
};

export const ProductsContext = React.createContext(defaultProductsContext);

export default ProductsContext;
