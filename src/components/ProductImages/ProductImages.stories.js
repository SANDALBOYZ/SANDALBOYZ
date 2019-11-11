import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import ProductImages from '.';

export default { title: 'Product Images' };

const mockImage = {
  localFile: {
    childImageSharp: {
      fluid: {
        src: 'https://source.unsplash.com/random',
        srcSet: `${'https://source.unsplash.com/random'} 2550w`,
        sizes: '(max-width: 2550px) 100vw, 2550px',
      },
    },
  },
};

export const Desktop = () => (
  <ProductImages
    images={[
      mockImage,
      mockImage,
      mockImage,
      mockImage,
      mockImage,
    ]}
  />
);

export const Mobile = () => (
  <ProductImages
    images={[
      mockImage,
      mockImage,
      mockImage,
      mockImage,
      mockImage,
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
