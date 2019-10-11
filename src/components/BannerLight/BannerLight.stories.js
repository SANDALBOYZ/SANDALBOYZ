import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import BannerLight from '.';

export default { title: 'Banner - Light Variant' };

export const Desktop = () => (
  <BannerLight
    label="02 / Permanent Collection"
    title="Some sort of title with a lifestyle image."
    cta={{ href: '/stories', name: 'View blog' }}
  />
);

export const Mobile = () => (
  <BannerLight
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
