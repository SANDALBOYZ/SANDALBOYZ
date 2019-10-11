import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { Container, TextContainer } from '@utils/styles';
import SearchResult from '.';

export default { title: 'Search Result' };

export const Desktop = () => (
  <TextContainer>
    <SearchResult
      collection="ChromaColor"
      description="Our ChromaColor™ collection draws its inspiration from the introduction of color television in America.  The sandals mirror the transition from traditional black and white programming to the permanent establishment of color.  The ChromaColor is one of the best collections we have."
      href="/products/product"
      price="$65"
      title="Kelly Green"
    />
  </TextContainer>
);

export const Mobile = () => (
  <Container>
    <SearchResult
      collection="ChromaColor"
      description="Our ChromaColor™ collection draws its inspiration from the introduction of color television in America.  The sandals mirror the transition from traditional black and white programming to the permanent establishment of color.  The ChromaColor is one of the best collections we have."
      href="/products/product"
      price="$65"
      title="Kelly Green"
    />
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
