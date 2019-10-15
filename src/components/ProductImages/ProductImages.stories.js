import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import ProductImages from '.';

export default { title: 'Product Images' };

export const Desktop = () => (
  <ProductImages
    images={[
      'https://source.unsplash.com/random',
      'https://source.unsplash.com/random',
      'https://source.unsplash.com/random',
      'https://source.unsplash.com/random',
      'https://source.unsplash.com/random',
    ]}
  />
);

export const Mobile = () => (
  <ProductImages
    images={[
      'https://source.unsplash.com/random',
      'https://source.unsplash.com/random',
      'https://source.unsplash.com/random',
      'https://source.unsplash.com/random',
      'https://source.unsplash.com/random',
    ]}
  />
);

Mobile.story = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
};
