import React from 'react';

import Hero from '.';

export default { title: 'Hero' };

export const Desktop = () => (
  <Hero
    label="01 / Featured Article"
    title="A$AP Ferg gets his nails done on a boat"
    cta={{ href: '/stories', name: 'Read article' }}
  />
);
