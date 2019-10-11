import React from 'react';
import styled from 'styled-components';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import space, { H_PADDING } from '@utils/space';
import { Container as BaseContainer, mq } from '@utils/styles';
import FeaturedStoryCard from '.';

const Container = styled(BaseContainer)`
  padding: 0;
  & > :first-child {
    margin-bottom: ${space[2]};
  }

  ${mq.gtlg} {
    display: flex;
    padding: 0 ${H_PADDING};

    & > :first-child {
      margin-right: ${space[3]};
      margin-bottom: 0;
    }
  }
`;

export default { title: 'Featured Story Card' };

export const Desktop = () => (
  <Container>
    <FeaturedStoryCard href="stories/story" title="This would be some sort of article title to go with this image" />
    <FeaturedStoryCard href="stories/story" title="This would be some sort of article title to go with this image" />
  </Container>
);

export const Mobile = () => (
  <Container>
    <FeaturedStoryCard href="stories/story" title="This would be some sort of article title to go with this image" />
    <FeaturedStoryCard href="stories/story" title="This would be some sort of article title to go with this image" />
  </Container>
);

Mobile.story = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
};
