import React from 'react';
import styled from 'styled-components';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import About from '.';

export default { title: 'About' };

const Container = styled.div`
  padding: 30px;
`;

export const Desktop = () => (
  <Container>
    <About title="About Us" />
  </Container>
);

export const Mobile = () => (
  <Container>
    <About title="About Us" />
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
