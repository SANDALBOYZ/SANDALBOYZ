import React from 'react';
import styled from 'styled-components';

import space from '@utils/space';
import { Container as BaseContainer } from '@utils/styles';
import FeaturedStoryCard from '.';

const Container = styled(BaseContainer)`
  display: flex;

  & > :first-child {
    margin-right: ${space[3]};
  }
`;

export default { title: 'Featured Story Card' };

export const Desktop = () => (
  <Container>
    <FeaturedStoryCard href="stories/story" title="This would be some sort of article title to go with this image" />
    <FeaturedStoryCard href="stories/story" title="This would be some sort of article title to go with this image" />
  </Container>
);
