import React from 'react';
import Image from 'gatsby-image';
import styled, { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

import colors from '@utils/colors';
import fonts, { weights } from '@utils/fonts';
import space, { H_PADDING, H_PADDING_MOBILE } from '@utils/space';

export const breakpoints = {
  xxs: 320,
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const mq = {
  gtxs: `@media (min-width: ${breakpoints.xs}px)`,
  gtsm: `@media (min-width: ${breakpoints.sm}px)`,
  gtmd: `@media (min-width: ${breakpoints.md}px)`,
  gtlg: `@media (min-width: ${breakpoints.lg}px)`,
  gtxl: `@media (min-width: ${breakpoints.xl}px)`,
};

export const fluidSize = (
  property,
  { minSize, maxSize, minScreenSize, maxScreenSize }
) => {
  return css`
    ${property}: ${minSize}px;

    @media screen and (min-width: ${minScreenSize}px) {
      ${property}: calc(${minSize}px + ${maxSize -
    minSize} * ((100vw - ${minScreenSize}px) / ${maxScreenSize -
    minScreenSize}));
    }

    @media screen and (min-width: ${maxScreenSize}px) {
      ${property}: ${maxSize}px;
    }
  `;
};

export const Breakpoint = ({
  children,
  min,
  max,
  display = 'inline-block',
}) => {
  let styles = {};

  if (min && max) {
    styles = css`
      display: none;

      @media (min-width: ${min}px) and (max-width: ${max}px) {
        display: ${display};
      }
    `;
  } else if (min) {
    styles = css`
      display: none;

      @media (min-width: ${min}px) {
        display: ${display};
      }
    `;
  } else if (max) {
    styles = css`
      display: none;

      @media (max-width: ${max}px) {
        display: ${display};
      }
    `;
  }

  const Wrapper = styled.div`
    ${styles}
  `;

  return <Wrapper>{children}</Wrapper>;
};

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    padding: 0 ${H_PADDING};
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    height: 100%;
    box-sizing: border-box;
  }

  body {
    color: ${colors.N900};
    font-family: ${fonts.STANDARD};
    font-size: 15px;
    font-weight: ${weights.LIGHT};
    line-height: 1.6;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  a {
    color: #000;
    text-decoration: none;
  }
`;

export const Group = styled.div`
  display: ${props => (props.inline ? 'inline-flex' : 'flex')};

  & > *:not(:last-child) {
    margin-right: ${props => props.spacing || space[2]};
  }
`;

export const Img = styled(Image)`
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
`;

export const TextContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    max-width: 960px;
    padding: 0;
  }
`;
