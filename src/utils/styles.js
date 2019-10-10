import Image from 'gatsby-image';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import colors from '@utils/colors';
import fonts, { weights } from '@utils/fonts';
import space from '@utils/space';

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
};

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 80px;
`;

export const GlobalStyle = createGlobalStyle`
  ${reset}

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
  max-width: 960px;
`;
