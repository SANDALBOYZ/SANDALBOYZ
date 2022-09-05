import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import Hero, { FullHero } from '.';

export default { title: 'Hero' };

export const heroDesktop = () => (
  <Hero
    image={{
      src: 'https://source.unsplash.com/random/2000x1500',
      srcSet: 'https://source.unsplash.com/random/2000x1500 2000w',
      sizes: '(max-width: 2550px) 100vw, 2550px',
      aspectRatio: 1.2,
    }}
    label="01 / Featured Article"
    title="A$AP Ferg gets his nails done on a boat"
    href="/stories"
  />
);

export const heroMobile = () => (
  <Hero
    image={{
      src: 'https://source.unsplash.com/random/1200x800',
      srcSet: 'https://source.unsplash.com/random/1200x800 1200w',
      sizes: '(max-width: 2550px) 100vw, 2550px',
      aspectRatio: 1.2,
    }}
    label="01 / Featured Article"
    title="A$AP Ferg gets his nails done on a boat"
    href="/stories"
  />
);

heroMobile.story = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
};

export const fullHeroDesktop = () => (
  <FullHero
    image={{
      src: 'https://source.unsplash.com/random',
      srcSet: 'https://source.unsplash.com/random 2550w',
      sizes: '(max-width: 2550px) 100vw, 2550px',
      aspectRatio: 1.2,
    }}
    header="Spring/Summer"
    label="Lean Into The Wind"
    href=""
    callToAction="Shop Now"
  />
);

export const fullHeroMobile = () => (
  <FullHero
    image={{
      src: 'https://source.unsplash.com/random/375x815',
      srcSet: 'https://source.unsplash.com/random/375x815 375w',
      sizes: '',
      aspectRatio: 0.45,
    }}
    header="Spring/Summer"
    label="Lean Into The Wind"
    href=""
    callToAction="Shop Now"
  />
);

fullHeroMobile.story = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone8p',
    },
  },
};
