import React from 'react';
import styled from 'styled-components';

import ProductTile from '.';

const Container = styled.div`
  margin: 20px;
  width: 300px;
`;

export default { title: 'Product Tile' };

export const normal = () => (
  <Container>
    <ProductTile
      price="65"
      title="Kelly Green"
      images={[
        {
          src: 'https://source.unsplash.com/random',
          srcSet: 'https://source.unsplash.com/random 2550w',
          sizes: '(max-width: 2550px) 100vw, 2550px',
          aspectRatio: 1,
        },
        {
          src: 'https://source.unsplash.com/random/1080x1080',
          srcSet: 'https://source.unsplash.com/random/1080x1080 2550w',
          sizes: '(max-width: 2550px) 100vw, 2550px',
          aspectRatio: 1,
        },
      ]}
    />
  </Container>
);

export const soldOut = () => (
  <Container>
    <ProductTile
      price="65"
      soldOut
      title="Kelly Green"
      images={[
        {
          src: 'https://source.unsplash.com/random',
          srcSet: 'https://source.unsplash.com/random 2550w',
          sizes: '(max-width: 2550px) 100vw, 2550px',
          aspectRatio: 1,
        },
        {
          src: 'https://source.unsplash.com/random/1080x1080',
          srcSet: 'https://source.unsplash.com/random/1080x1080 2550w',
          sizes: '(max-width: 2550px) 100vw, 2550px',
          aspectRatio: 1,
        },
      ]}
    />
  </Container>
);

export const onSale = () => (
  <Container>
    <ProductTile
      price="65"
      onSale
      compareAtPrice="75"
      title="Kelly Green"
      images={[
        {
          src: 'https://source.unsplash.com/random',
          srcSet: 'https://source.unsplash.com/random 2550w',
          sizes: '(max-width: 2550px) 100vw, 2550px',
          aspectRatio: 1,
        },
        {
          src: 'https://source.unsplash.com/random/1080x1080',
          srcSet: 'https://source.unsplash.com/random/1080x1080 2550w',
          sizes: '(max-width: 2550px) 100vw, 2550px',
          aspectRatio: 1,
        },
      ]}
    />
  </Container>
);
