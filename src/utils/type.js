import styled from 'styled-components';

import fonts, { weights } from '@utils/fonts';

export const H100 = styled.h1`
  font-family: ${fonts.CONDENSED};
  font-size: 100px;
  font-style: italic;
  font-weight: ${weights.BLACK};
  letter-spacing: 1.5px;
  line-height: 90px;
  text-transform: uppercase;
`;

export const H200 = styled.h2`
  font-family: ${fonts.CONDENSED};
  font-size: 54px;
  font-style: italic;
  font-weight: ${weights.BLACK};
  letter-spacing: 1px;
  line-height: 54px;
  text-transform: uppercase;
`;

export const H300 = styled.h3`
  font-family: ${fonts.CONDENSED};
  font-size: 34px;
  font-weight: ${weights.BLACK};
  letter-spacing: 1px;
  line-height: 38px;
  text-transform: uppercase;
`;

export const H400 = styled.h4`
  font-family: ${fonts.CONDENSED};
  font-size: 24px;
  font-weight: ${weights.BOLD};
  letter-spacing: 1px;
  line-height: 26px;
  text-transform: uppercase;
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

export const Body = styled.p`
  font-family: ${fonts.STANDARD};
  font-size: 15px;
  font-weight: ${weights.LIGHT};
  line-height: 28px;
`;

export const Detail = styled.span`
  font-family: ${fonts.STANDARD};
  font-size: 13px;
  font-weight: ${weights.LIGHT};
  line-height: 24px;
`;
