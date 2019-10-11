import React, { Component } from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import Button from '@components/Button';
import Navigation from '@components/Navigation';
import Drawer from '.';

export default { title: 'Drawer' };

class Demo extends Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { open } = this.state;

    return (
      <div>
        <Navigation />
        <Button onClick={this.handleOpen}>Open drawer</Button>
        <Drawer
          actions={{
            close: {
              name: 'Continue shopping',
            },
            next: {
              name: 'Proceed to checkout',
              href: 'https://sandalboyz.shopify.com',
            },
          }}
          onClose={this.handleClose}
          open={open}
          title="Your cart"
        />
      </div>
    );
  }
}

export const Desktop = () => <Demo />;

export const Mobile = () => <Demo />;

Mobile.story = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
};
