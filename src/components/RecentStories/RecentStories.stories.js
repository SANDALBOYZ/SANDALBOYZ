import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import RecentStories from '.';

export default { title: 'Recent Stories' };

export const Desktop = () => (
  <RecentStories
    storyA={{
      href: '/stories/story',
      date: '2020-03-16T01:54:34Z',
      title: 'This would be some sort of article title to go with this image',
    }}
    storyB={{
      href: '/stories/story',
      date: '2020-03-16T01:54:34Z',
      title: 'This would be some sort of article title to go with this image',
    }}
  />
);

export const Mobile = () => (
  <RecentStories
    storyA={{
      href: '/stories/story',
      date: '2020-03-16T01:54:34Z',
      title: 'This would be some sort of article title to go with this image',
    }}
    storyB={{
      href: '/stories/story',
      date: '2020-03-16T01:54:34Z',
      title: 'This would be some sort of article title to go with this image',
    }}
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
