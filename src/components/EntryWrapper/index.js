import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styled, { css, keyframes } from 'styled-components';

// Shifts from above to in position while fading in.
const shiftFade = keyframes`
  0% {
    transform: translateY(-5px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  ${props => props.customAnimation
    ? props.customAnimation
    : css`
      animation: ${shiftFade} 1.5s cubic-bezier(.19, 1, .22, 1);
      animation-delay: 500ms;
    `
  }
  display: block;
  position: relative;
  z-index: 1;
  ${props => props.zIndex && css`
    z-index: ${props.zIndex};
  `}

  opacity: 0;

  &.active {
    opacity: 1;
  }
`;

export const EntryWrapper = ({ children, customAnimation, zIndex }) => {
  const [animationEnd, setAnimationEnd] = useState(false);

  return (
    <Wrapper
      onAnimationEnd={() => setAnimationEnd(true)}
      className={animationEnd ? 'active' : ''}
      customAnimation={customAnimation}
      zIndex={zIndex}
    >
      {children}
    </Wrapper>
  );
};

EntryWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  // Use `styled-components/css`
  customAnimation: PropTypes.string,
  zIndex: PropTypes.string,
};

export default EntryWrapper;
