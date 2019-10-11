import React from 'react';

import ProductGrid from '.';

export default { title: 'Product Grid' };

const products = [...Array(10)].map((_, idx) => ({
  price: '$65',
  title: `Product ${idx + 1}`,
  soldOut: idx === 7,
}));

export const Desktop = () => <ProductGrid products={products} />;
