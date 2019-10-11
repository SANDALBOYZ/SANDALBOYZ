import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import ProductGrid from '.';

export default { title: 'Product Grid' };

const products = [...Array(10)].map((_, idx) => ({
  price: '$65',
  title: `Product ${idx + 1}`,
  soldOut: idx === 7,
}));

export const Desktop = () => <ProductGrid products={products} />;


export const Mobile = () => <ProductGrid products={products} title="Chroma Collection" />;

Mobile.story = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
};
