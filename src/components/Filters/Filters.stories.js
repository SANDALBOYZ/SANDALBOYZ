import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import Filters from '.';

export default { title: 'Featured Story' };

export const Desktop = () => (
  <Filters
    href="/stories/story"
    label="Featured story"
    title="The title of an interesting featured or most recent story"
  />
);

export const Mobile = () => (
  <Filters
    href="/stories/story"
    label="Featured story"
    title="The title of an interesting featured or most recent story"
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
