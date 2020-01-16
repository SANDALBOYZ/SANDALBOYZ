import styled from 'styled-components';

import colors from '@utils/colors';
import fonts, { weights } from '@utils/fonts';
import space, { H_PADDING, H_PADDING_MOBILE } from '@utils/space';
import { mq } from '@utils/styles';
import { Body as BaseBody, H600 as BaseH600 } from '@utils/type';
import BaseIcon from '@components/Icon';

export const Body = styled(BaseBody)`
  margin-bottom: ${space[5]};

  & a {
    text-decoration: underline;
  }

  & em {
    font-style: italic;
  }

  & h1 {
    margin-bottom: 20px;
    font-family: ${fonts.CONDENSED};
    font-style: italic;
    font-size: 35px;
    font-weight: ${weights.BLACK};
    letter-spacing: -0.01em;
    line-height: 40px;
    text-transform: uppercase;
  }

  & h2 {
    margin-bottom: 18px;
    font-family: ${fonts.CONDENSED};
    font-style: italic;
    font-size: 29px;
    font-weight: ${weights.BLACK};
    letter-spacing: -0.01em;
    line-height: 32px;
    text-transform: uppercase;
  }

  & h3 {
    margin-bottom: 16px;
    font-family: ${fonts.CONDENSED};
    font-style: italic;
    font-size: 24px;
    font-weight: ${weights.BLACK};
    letter-spacing: -0.01em;
    line-height: 28px;
    text-transform: uppercase;
  }

  & h4 {
    margin-bottom: 12px;
    font-family: ${fonts.CONDENSED};
    font-style: italic;
    font-size: 20px;
    font-weight: ${weights.BLACK};
    letter-spacing: -0.008em;
    line-height: 24px;
    text-transform: uppercase;
  }

  & h5 {
    margin-bottom: 8px;
    font-family: ${fonts.CONDENSED};
    font-style: italic;
    font-size: 16px;
    font-weight: ${weights.BOLD};
    letter-spacing: -0.006em;
    line-height: 20px;
    text-transform: uppercase;
  }

  & h6 {
    margin-bottom: 4px;
    font-family: ${fonts.CONDENSED};
    font-style: italic;
    font-size: 14px;
    font-weight: ${weights.BOLD};
    letter-spacing: -0.003em;
    line-height: 16px;
    text-transform: uppercase;
  }

  & strong {
    font-weight: ${weights.BOLD};
  }

  & p {
    font-family: ${fonts.STANDARD};
    font-size: 15px;
    font-weight: ${weights.LIGHT};
    line-height: 28px;
    max-width: ${space[15]};
    margin: ${space[2]} auto;
    padding: 0 ${H_PADDING_MOBILE};

    ${mq.gtlg} {
      padding: 0;
    }
  }

  & blockquote * {
    max-width: ${space[17]};
    margin: ${space[4]} 0;
    font-family: ${fonts.CONDENSED};
    font-size: 32px;
    font-style: italic;
    font-weight: ${weights.BLACK};
    letter-spacing: 1px;
    line-height: 32px;
    text-transform: uppercase;

    ${mq.gtlg} {
      margin: ${space[6]} ${H_PADDING};
      font-size: 54px;
      line-height: 54px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;

  ${mq.gtlg} {
    flex-direction: row;
    padding: ${space[4]} ${H_PADDING};
  }
`;

export const H600 = styled(BaseH600)`
  margin-bottom: ${space[2]};
`;

export const Icon = styled(BaseIcon)`
  fill: ${colors.N900};
  height: 16px;
`;

export const MobileProductInfo = styled.div`
  margin-bottom: ${space[3]};
  padding: 0 ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    display: none;
  }
`;

export const ProductInfo = styled.div`
  margin-bottom: ${space[8]};
  padding: 0 ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    width: 50%;
    margin-bottom: 0;
    padding: ${space[6]} ${space[7]};
  }
`;

export const Selections = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${space[1]} 0 ${space[6]};

  & label {
    flex: 1;

    &:first-of-type {
      margin-right: ${space[3]};
    }
  }

  & button {
    margin-top: ${space[3]};
    width: 100%;
  }

  ${mq.gtmd} {
    flex-wrap: nowrap;
    align-items: flex-end;
    margin: ${space[5]} 0 ${space[6]};

    & input {
      width: 12ch;
    }

    & label {
      flex: initial;
    }

    & button {
      width: auto;
    }

    & > *:not(:last-child) {
      margin-right: ${space[3]};
    }
  }
`;

export const Status = styled.div`
  position: absolute;
  top: ${space[2]};
  left: ${space[2]};
  z-index: 1;
  padding: 0 ${space[1]};
  color: ${colors.N0};
  background-color: ${colors.NEGATIVE};

  & > span {
    display: inline-block;
    transform: translateY(-1px);
  }
`;

export const Sizing = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${space[5]};
  cursor: pointer;

  & > *:first-child {
    margin-right: ${space[2]};
  }

  & > svg {
    height: 18px;
  }
`;

export const Social = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: ${space[4]};
  }
`;
