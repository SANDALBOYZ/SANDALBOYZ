import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import Hero from '.';

export default { title: 'Hero' };

export const Desktop = () => (
  <Hero
    label="01 / Featured Article"
    title="A$AP Ferg gets his nails done on a boat"
    cta={{ href: '/stories', name: 'Read article' }}
  />
);

export const Mobile = () => (
  <Hero
    label="01 / Featured Article"
    title="A$AP Ferg gets his nails done on a boat"
    cta={{ href: '/stories', name: 'Read article' }}
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
