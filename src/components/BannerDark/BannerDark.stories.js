import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import BannerDark from '.';

export default { title: 'Banner - Dark Variant' };

export const Desktop = () => (
  <BannerDark
    label="02 / Permanent Collection"
    title="Some sort of title with a lifestyle image."
    cta={{ href: '/stories', name: 'View blog' }}
  />
);

export const Mobile = () => (
  <BannerDark
    label="02 / Permanent Collection"
    title="Some sort of title with a lifestyle image."
    cta={{ href: '/stories', name: 'View blog' }}
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
