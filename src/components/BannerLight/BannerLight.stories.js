import React from 'react';

import BannerLight from '.';

export default { title: 'Banner - Light Variant' };

export const Desktop = () => (
  <BannerLight
    label="02 / Permanent Collection"
    title="Some sort of title with a lifestyle image."
    cta={{ href: '/stories', name: 'View blog' }}
  />
);
