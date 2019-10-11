import React from 'react';

import { FullWidthImage, SplitImage, TwoThirdsImage } from '.';

export default { title: 'Story Image' };

export const fullWidthImage = () => <FullWidthImage />;

export const splitImage = () => <SplitImage caption="Donec luctus mauris nec nibh tristique, posuere auctor mi condimentum." />;

export const twoThirdsImage = () => <TwoThirdsImage />;
