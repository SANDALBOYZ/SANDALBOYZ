import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styled, { css, keyframes } from 'styled-components';

const zoomFade = keyframes`
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
    ? css`animation: ${zoomFade} 1.5s cubic-bezier(.19, 1, .22, 1);`
    : css`animation: ${zoomFade} 1.5s cubic-bezier(.19, 1, .22, 1);`
  }
  animation-delay: 250ms;

  opacity: 0;

  &.active {
    opacity: 1;
  }
`;

export const EntryWrapper = ({ children, customAnimation }) => {
  const [animationEnd, setAnimationEnd] = useState(false);

  return (
    <Wrapper
      onAnimationEnd={() => setAnimationEnd(true)}
      className={animationEnd ? 'active' : ''}
      customAnimation={customAnimation}
    >
      {children}
    </Wrapper>
  );
};

EntryWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  // Use `styled-components/css`
  customAnimation: PropTypes.string,
};

export default EntryWrapper;
