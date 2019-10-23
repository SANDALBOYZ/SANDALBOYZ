import React from 'react';

import Button from '.';

export default { title: 'Button' };

export const themeDefault = () => <Button>Subscribe</Button>;

export const themeOutline = () => <Button theme="outline">Cancel</Button>;

export const themeLight = () => <Button theme="light">Add address</Button>;

export const layoutFullWidth = () => <Button fullWidth>Sign in</Button>;

export const sizeSmall = () => <Button size="small">Add to cart</Button>;

export const sizeLarge = () => <Button size="large">Search</Button>;
