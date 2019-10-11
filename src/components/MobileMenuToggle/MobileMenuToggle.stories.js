import React, { Component } from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import MobileMenuToggle from '.';

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
      <MobileMenuToggle
        onClick={open ? this.handleClose : this.handleOpen}
        open={open}
      />
    );
  }
}

export default {
  title: 'Mobile Menu Toggle',
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
};

export const Mobile = () => <Demo />;
