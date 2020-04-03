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
    <About title='About Us' />
  </Container>
);
