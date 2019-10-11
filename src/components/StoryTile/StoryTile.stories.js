import React from 'react';
import styled from 'styled-components';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import StoryTile from '.';

const Container = styled.div`
  width: 400px;
`;

export default { title: 'Story Tile' };

export const Desktop = () => (
  <Container>
    <StoryTile
      category="Category"
      href="/stories/story"
      title="The title of an interesting featured or most recent story"
    />
  </Container>
);

export const Mobile = () => (
  <StoryTile
    category="Category"
    href="/stories/story"
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
