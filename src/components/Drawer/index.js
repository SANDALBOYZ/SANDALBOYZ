import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import Button from '@components/Button';
import * as styled from './styles';

class Drawer extends Component {
  static propTypes = {
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
  };

  handleClick = evt => {
    evt.stopPropagation();
  };

  render() {
    const { actions, children, onClose, open, title } = this.props;

    return (
      <styled.Wrapper open={open} onClick={onClose}>
        <styled.Drawer open={open} onClick={this.handleClick}>
          <div>
            <styled.H300>{title}</styled.H300>
            {children}
          </div>
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
                disabled={get(actions, 'next.disabled')}
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
      </styled.Wrapper>
    );
  }
}

export default Drawer;
