import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import Button from '@components/Button';
import * as styled from './styles';

const Drawer = ({ actions, children, onClose, open, title }) => (
  <styled.Wrapper open={open}>
    <styled.Drawer open={open}>
      <styled.H300>{title}</styled.H300>
      {children}
      <styled.Actions>
        <Button
          fullWidth
          onClick={onClose}
          theme={get(actions, 'close.themeOverride', 'outline')}
        >
          {get(actions, 'close.name')}
        </Button>
        <Button
          external
          fullWidth
          href={get(actions, 'next.href')}
          onClick={get(actions, 'next.onClick')}
        >
          {get(actions, 'next.name')}
        </Button>
      </styled.Actions>
    </styled.Drawer>
  </styled.Wrapper>
);

Drawer.propTypes = {
  actions: PropTypes.shape({
    close: PropTypes.shape({
      name: PropTypes.string.isRequired,
      themeOverride: PropTypes.string,
    }),
    next: PropTypes.shape({
      href: PropTypes.string,
      name: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    }),
  }),
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Drawer;
