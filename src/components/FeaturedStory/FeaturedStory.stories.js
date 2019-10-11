import React from 'react';

import FeaturedStory from '.';

export default { title: 'Featured Story' };

export const Desktop = () => (
  <FeaturedStory
    href="/stories/story"
    label="Featured story"
    title="The title of an interesting featured or most recent story"
  />
);
