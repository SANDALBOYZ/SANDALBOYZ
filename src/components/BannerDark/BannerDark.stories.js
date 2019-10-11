import React from 'react';

import BannerDark from '.';

export default { title: 'Banner - Dark Variant' };

export const Desktop = () => (
  <BannerDark
    label="02 / Permanent Collection"
    title="Some sort of title with a lifestyle image."
    cta={{ href: '/stories', name: 'View blog' }}
  />
);
