import React from 'react';

import {
  FullHeightImage,
  FullWidthImage,
  DoubleImage,
  OffsetGridImage,
  SplitImage,
  TwoThirdsImage,
} from '.';

export default { title: 'Story Image' };

export const doubleImage = () => (
  <DoubleImage
    images={[
      {
        src: 'https://source.unsplash.com/random',
        srcSet: 'https://source.unsplash.com/random 2550w',
        sizes: '(max-width: 2550px) 100vw, 2550px',
        aspectRatio: 1,
      },
      {
        src: 'https://source.unsplash.com/random',
        srcSet: 'https://source.unsplash.com/random 2550w',
        sizes: '(max-width: 2550px) 100vw, 2550px',
        aspectRatio: 1,
      },
    ]}
  />
);

export const fullHeightImage = () => (
  <FullHeightImage
    image={{
      src: 'https://source.unsplash.com/random',
      srcSet: 'https://source.unsplash.com/random 2550w',
      sizes: '(max-width: 2550px) 100vw, 2550px',
      aspectRatio: 0.8,
    }}
  />
);

export const fullWidthImage = () => (
  <FullWidthImage
    image={{
      src: 'https://source.unsplash.com/random',
      srcSet: 'https://source.unsplash.com/random 2550w',
      sizes: '(max-width: 2550px) 100vw, 2550px',
    }}
  />
);

export const offsetGridImage = () => (
  <OffsetGridImage
    images={[
      {
        src: 'https://source.unsplash.com/random',
        srcSet: 'https://source.unsplash.com/random 2550w',
        sizes: '(max-width: 2550px) 100vw, 2550px',
      },
      {
        src: 'https://source.unsplash.com/random',
        srcSet: 'https://source.unsplash.com/random 2550w',
        sizes: '(max-width: 2550px) 100vw, 2550px',
      },
      {
        src: 'https://source.unsplash.com/random',
        srcSet: 'https://source.unsplash.com/random 2550w',
        sizes: '(max-width: 2550px) 100vw, 2550px',
      },
      {
        src: 'https://source.unsplash.com/random',
        srcSet: 'https://source.unsplash.com/random 2550w',
        sizes: '(max-width: 2550px) 100vw, 2550px',
      },
    ]}
  />
);

export const splitImage = () => (
  <SplitImage
    caption="Donec luctus mauris nec nibh tristique, posuere auctor mi condimentum."
    images={[
      {
        src: 'https://source.unsplash.com/random',
        srcSet: 'https://source.unsplash.com/random 2550w',
        sizes: '(max-width: 2550px) 100vw, 2550px',
      },
      {
        src: 'https://source.unsplash.com/random',
        srcSet: 'https://source.unsplash.com/random 2550w',
        sizes: '(max-width: 2550px) 100vw, 2550px',
      },
    ]}
  />
);

export const twoThirdsImage = () => (
  <TwoThirdsImage
    image={{
      src: 'https://source.unsplash.com/random',
      srcSet: 'https://source.unsplash.com/random 2550w',
      sizes: '(max-width: 2550px) 100vw, 2550px',
    }}
  />
);
