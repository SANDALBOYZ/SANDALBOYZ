import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import Hero from '.';

export default { title: 'Hero' };

export const Desktop = () => (
  <Hero
    image="https://source.unsplash.com/random/2000x1500"
    label="01 / Featured Article"
    title="A$AP Ferg gets his nails done on a boat"
    href="/stories"
  />
);

export const Mobile = () => (
  <Hero
    image="https://source.unsplash.com/random/1200x800"
    label="01 / Featured Article"
    title="A$AP Ferg gets his nails done on a boat"
    href="/stories"
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
