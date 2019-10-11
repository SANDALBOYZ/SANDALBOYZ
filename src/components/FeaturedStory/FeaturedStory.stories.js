import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import FeaturedStory from '.';

export default { title: 'Featured Story' };

export const Desktop = () => (
  <FeaturedStory
    href="/stories/story"
    label="Featured story"
    title="The title of an interesting featured or most recent story"
  />
);

export const Mobile = () => (
  <FeaturedStory
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
