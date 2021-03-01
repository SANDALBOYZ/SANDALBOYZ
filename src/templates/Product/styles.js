import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

import colors from '@utils/colors';
import { fonts, weights } from '@utils/fonts';
import space, { H_PADDING, H_PADDING_MOBILE } from '@utils/space';
import { mq } from '@utils/styles';
import { H600 as BaseH600 } from '@utils/type';
import BaseIcon from '@components/Icon';

export const Details = styled.div`
  font-family: ${fonts.NIMBUS};
  font-size: 14px;
  line-height: 1.3;
  font-weight: ${weights.LIGHT};
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
    margin: ${space[1]} auto;
    padding: 0;
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
  margin-top: ${space[4]};

  ${mq.gtlg} {
    margin-top: 0;
  }
`;

export const Icon = styled(BaseIcon)`
  fill: ${colors.N900};
  height: 16px;
`;

// Title and price
export const MobileProductTitle = styled(motion.div)`
  margin-bottom: ${space[3]};
  padding: 0 ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    display: none;
  }
`;

// Product description
export const ProductInfo = styled(motion.div)`
  align-self: flex-start;
  position: sticky;
  top: calc(80px + 24px);
  height: auto;
  margin: ${space[4]} 0;
  padding: 0 ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    width: 40%;
    margin-bottom: 0;
    padding: ${space[6]} ${space[7]};
  }
`;

export const Selections = styled.div`
  display: none;
  flex-wrap: wrap;
  margin: ${space[1]} 0 ${space[6]};

  & > span {
    display: inline-block;
    flex: 1;

    &:not(:last-of-type) {
      margin-right: ${space[3]};
    }
  }

  & button {
    margin-top: ${space[3]};
    width: 100%;
  }

  ${mq.gtmd} {
    align-items: flex-end;
    margin: ${space[5]} 0 ${space[6]};
  }

  ${mq.gtlg} {
    display: flex;
  }
`;

export const MobileSelectionsTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Sticky bar that holds quantity dropdown/color selection/etc. and buy button
export const MobileSelections = styled.div`
  position: sticky;
  bottom: 0;
  width: 100vw;
  margin-bottom: ${space[8]};
  z-index: 8000;
  background-color: ${colors.WINTER_WHITE};
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  display: flex;
  flex-wrap: wrap;
  padding: ${space[3]} ${space[5]};
  transition: transform 1.5s ease, opacity 1.5s ease;
  opacity: 1;
  animation: ${slideUp} 1.5s ease;

  & > span {
    display: inline-block;
    flex: 1;

    &:not(:last-of-type) {
      margin-right: ${space[3]};
    }
  }

  & button {
    margin-top: ${space[2]};
    width: 100%;
  }

  ${mq.gtlg} {
    animation: none;
    transform: translateY(100%);
    opacity: 0;
  }
`;

export const Status = styled.div`
  display: inline-block;
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

export const MobilePriceContainer = styled.div`
  display: flex;
`;
