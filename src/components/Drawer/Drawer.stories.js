import React, { Component } from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import styled from 'styled-components';

import Button from '@components/Button';
import Navigation from '@components/Navigation';
import Drawer from '.';

const LaunchButton = styled(Button)`
  margin-top: 80px;
`;

const DemoContainer = styled.div`
  padding: 20px;
`;

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
      <DemoContainer>
        <Navigation />
        <LaunchButton onClick={this.handleOpen}>Open drawer</LaunchButton>
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
          {...this.props}
        />
      </DemoContainer>
    );
  }
}

export const Desktop = () => <Demo />;

export const DesktopLoading = () => <Demo loading />;

export const Mobile = () => <Demo />;

Mobile.story = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
};

export const MobileLoading = () => <Demo loading />;

MobileLoading.story = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
};
