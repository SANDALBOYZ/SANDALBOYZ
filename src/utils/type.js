import styled from 'styled-components';

import fonts, { weights } from '@utils/fonts';
import { breakpoints, fluidSize } from '@utils/styles';

export const Badge = styled.span`
  font-family: ${fonts.CONDENSED};
  font-size: 13px;
  font-weight: ${weights.BOLD};
  letter-spacing: 1px;
  line-height: 1;
  text-transform: uppercase;
`;

export const Body = styled.p`
  font-family: ${fonts.STANDARD};
  font-size: 15px;
  font-weight: ${weights.LIGHT};
  line-height: 28px;
`;

export const ContentLabel = styled.p`
  font-family: ${fonts.CONDENSED};
  font-weight: ${weights.BOLD};
  letter-spacing: 1px;
  text-transform: uppercase;

  ${fluidSize('font-size', {
    minSize: 12,
    maxSize: 15,
    minScreenSize: breakpoints.xxs,
    maxScreenSize: breakpoints.xl,
  })}

  ${fluidSize('line-height', {
    minSize: 13,
    maxSize: 16,
    minScreenSize: breakpoints.xxs,
    maxScreenSize: breakpoints.xl,
  })}
`;

export const Detail = styled.span`
  font-family: ${fonts.STANDARD};
  font-size: 13px;
  font-weight: ${weights.LIGHT};
  line-height: 24px;
`;

export const H100 = styled.h1`
  font-family: ${fonts.CONDENSED};
  font-style: italic;
  font-weight: ${weights.BLACK};
  letter-spacing: 1.5px;
  text-transform: uppercase;

  ${fluidSize('font-size', {
    minSize: 36,
    maxSize: 100,
    minScreenSize: breakpoints.xxs,
    maxScreenSize: breakpoints.xl,
  })}

  ${fluidSize('line-height', {
    minSize: 32,
    maxSize: 90,
    minScreenSize: breakpoints.xxs,
    maxScreenSize: breakpoints.xl,
  })}
`;

export const H200 = styled.h2`
  font-family: ${fonts.CONDENSED};
  font-size: 54px;
  font-style: italic;
  font-weight: ${weights.BLACK};
  letter-spacing: 1px;
  line-height: 54px;
  text-transform: uppercase;

  ${fluidSize('font-size', {
    minSize: 36,
    maxSize: 54,
    minScreenSize: breakpoints.xxs,
    maxScreenSize: breakpoints.xl,
  })}

  ${fluidSize('line-height', {
    minSize: 32,
    maxSize: 54,
    minScreenSize: breakpoints.xxs,
    maxScreenSize: breakpoints.xl,
  })}
`;

export const H300 = styled.h3`
  font-family: ${fonts.CONDENSED};
  font-size: 34px;
  font-weight: ${weights.BLACK};
  letter-spacing: 1px;
  line-height: 38px;
  text-transform: uppercase;
`;

export const H300M = styled.h3`
  font-family: ${fonts.CONDENSED};
  font-size: 24px;
  font-weight: ${weights.BLACK};
  letter-spacing: 1px;
  line-height: 24px;
  text-transform: uppercase;
`;

export const H400 = styled.h4`
  font-family: ${fonts.CONDENSED};
  font-size: 24px;
  font-weight: ${weights.BOLD};
  letter-spacing: 1px;
  line-height: 26px;
  text-transform: uppercase;

  ${fluidSize('font-size', {
    minSize: 16,
    maxSize: 24,
    minScreenSize: breakpoints.xxs,
    maxScreenSize: breakpoints.xl,
  })}

  ${fluidSize('line-height', {
    minSize: 18,
    maxSize: 26,
    minScreenSize: breakpoints.xxs,
    maxScreenSize: breakpoints.xl,
  })}
`;

export const H500 = styled.h5`
  font-family: ${fonts.CONDENSED};
  font-size: 18px;
  font-weight: ${weights.BOLD};
  line-height: 36px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const H600 = styled.h6`
  font-family: ${fonts.CONDENSED};
  font-size: 12px;
  font-weight: ${weights.BOLD};
  line-height: 10px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;
