import React from 'react';
import styled from 'styled-components';

import ProductTile from '.';

const Container = styled.div`
  width: 300px;
`;

export default { title: 'Product Tile' };

export const Desktop = () => (
  <Container>
    <ProductTile price="$65" title="Kelly Green" />
  </Container>
);

export const soldOut = () => (
  <Container>
    <ProductTile price="$65" soldOut title="Kelly Green" />
  </Container>
);
