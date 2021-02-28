import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import Button from '@components/Button';
import * as styled from './styles';

export function Drawer({ actions, children, onClose, open, title, loading, backgroundColor }) {
  const handleKeyDown = event => {
    if (event.keyCode === 27 && open) {
      onClose();
    }
  };

  const handleClick = event => {
    event.stopPropagation();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <styled.DrawerWrapper open={open} onClick={onClose}>
      <styled.Drawer open={open} onClick={handleClick}>
        {loading && <styled.LoadingBar />}
          <styled.H3>{title}</styled.H3>
          {children}
        {actions && (
          <styled.Actions>
            <Button
              fullWidth
              onClick={onClose}
              theme={get(actions, 'close.themeOverride', 'outline')}
            >
              {get(actions, 'close.name')}
            </Button>
            <Button
              disabled={loading || get(actions, 'next.disabled')}
              external
              fullWidth
              href={get(actions, 'next.href')}
              onClick={get(actions, 'next.onClick')}
            >
              {get(actions, 'next.name')}
            </Button>
          </styled.Actions>
        )}
      </styled.Drawer>
    </styled.DrawerWrapper>
  );
}

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
  children: PropTypes.node,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

export default Drawer;
