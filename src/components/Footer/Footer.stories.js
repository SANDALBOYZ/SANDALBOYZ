import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import Footer from '.';

const props = {
  about:
    'Hella narwhal Cosby sweater McSweeney\'s, salvia kitsch before they sold out High Life. Umami tattooed sriracha meggings pickled Marfa Blue Bottle High Life next level four loko PBR. Keytar pickled next level keffiyeh drinking.',
  socialLinks: {
    facebook: 'https://facebook.com/sandalboyz',
    instagram: 'https://instagram.com/sandalboyz',
    twitter: 'https://twitter.com/sandalboyz',
  },
};

export default { title: 'Footer' };

export const Desktop = () => <Footer {...props} />;

export const Mobile = () => <Footer {...props} />;

Mobile.story = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
};
