import React from 'react';
import styled from 'styled-components';

import SearchResult from '.';

const Container = styled.div`
  width: 960px;
  margin: 0 auto;
`;

export default { title: 'Search Result' };

export const Desktop = () => (
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
