import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { H500 } from '@utils/type';
import Header from '.';

export default { title: 'Header' };

export const Desktop = () => (
  <Header
    label="Sign in"
    title="Welcome back"
  />
);

export const desktopDark = () => (
  <Header
    label="Sign in"
    theme="dark"
    title="Welcome back"
  />
);

export const withChildren = () => (
  <Header
    label="Fall 2019 Collections"
    title="All Products"
  >
    <H500>Filter By</H500>
  </Header>
);

export const Mobile = () => (
  <Header
    title="All Products"
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
