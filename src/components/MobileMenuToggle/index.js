import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

import colors from '@utils/colors';
import { mq } from '@utils/styles';

const rotateScale = keyframes`
  50% {
    transform: scaleY(1);
  }
  100% {
    transform: rotate(-45deg) scaleY(0.8);
  }
`;

const rotateScaleReverse = keyframes`
  50% {
    transform: scaleY(1);
  }
  100% {
    transform: rotate(45deg) scaleY(0.8);
  }
`;

const rotateBack = keyframes`
  0% {
    transform: rotate(45deg);
  }
  50% {
    transform: rotate(0deg);
  }
`;

const rotateBackReverse = keyframes`
  0% {
    transform: rotate(-45deg);
  }
  50% {
    transform: rotate(0deg);
  }
`;

const Button = styled.a`
  display: inline-block;
  position: relative;
  width: 28px;
	height: 24px;
  cursor: pointer;

  ${mq.gtlg} {
    display: none;
  }
`;

const Span = styled.span`
  display: block;
  position: absolute;
  top: 50%;
  right: 0;
  height: ${props => props.light ? '2px' : '3px'};
  margin-top: -3px;
  background: ${props => props.light ? colors.N0 : colors.N900};
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:nth-child(1) {
    width: 28px;
    ${props =>
      !props.open
        ? css`
            animation: ${rotateBack} 0.6s
              cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          `
        : css`
            animation: ${rotateScale} 0.4s
              cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.1s forwards;
          `}
    transform: translateY(-7px);
  }

  &:nth-child(2) {
    width: ${props => props.open ? '28px' : '22px'};
    transform: scaleX(${props => (props.open ? 0 : 1)});
  }

  &:nth-child(3) {
    width: 28px;
    ${props =>
      !props.open
        ? css`
            animation: ${rotateBackReverse} 0.6s
              cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          `
        : css`
            animation: ${rotateScaleReverse} 0.4s
              cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.1s forwards;
          `}
    transform: translateY(7px) scaleX(${props => props.open ? 1 : 0.4});
    transform-origin: ${props => props.open ? 'center' : 'right'};
  }
`;

const Wrapper = styled.span`
  display: block;
  position: absolute;
  width: 28px;
  height: 28px;
  transform: scale(${props => (props.open ? 0.9 : 0.8)});
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

const MobileMenuToggle = ({ light, onClick, open }) => (
  <Button onClick={onClick} open={open}>
    <Wrapper open={open}>
      <Span open={open} light={light} />
      <Span open={open} light={light} />
      <Span open={open} light={light} />
    </Wrapper>
  </Button>
);

MobileMenuToggle.propTypes = {
  light: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MobileMenuToggle;
