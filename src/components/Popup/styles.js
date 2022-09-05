import styled from 'styled-components';

import BaseIcon from '@components/Icon';
import colors from '@utils/colors';
import fonts, { weights } from '@utils/fonts';
import space, { H_PADDING, H_PADDING_MOBILE } from '@utils/space';
import { mq } from '@utils/styles';
import { Body, H200 } from '@utils/type';

export const Button = styled.button`
  position: absolute;
  top: ${H_PADDING_MOBILE};
  right: ${H_PADDING_MOBILE};
  height: 30px;
  width: 30px;
  padding: 0;
  appearance: none;
  background: transparent;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  outline: 0;

  &:hover {
    background-color: ${colors.N100};
  }

  & svg {
    height: 24px;
    width: 24px;
    fill: ${colors.N800};
    vertical-align: middle;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${space[4]};
  text-align: center;

  ${mq.gtsm} {
    padding: ${space[6]};
    text-align: left;
  }
`;

export const Description = styled(Body)`
  margin: 0 0 ${space[3]};
  color: ${colors.N600};
  line-height: 22px;

  ${mq.gtsm} {
    margin: 0 0 ${space[4]};
  }

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

export const Icon = styled(BaseIcon)`
  fill: ${colors.N900};
  height: 16px;
`;

export const Image = styled.div`
  position: relative;
  padding-bottom: 66.67%;
  background-color: ${colors.N100};

  ${mq.gtsm} {
    width: 320px;
    min-width: 320px;
    padding: 0;
  }
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.N0};

  ${mq.gtsm} {
    flex-direction: row-reverse;
    height: 450px;
    width: 800px;
  }
`;

export const Social = styled.div`
  display: flex;
  justify-content: center;

  & > *:not(:last-child) {
    margin-right: ${space[4]};
  }

  ${mq.gtsm} {
    justify-content: flex-start;
  }
`;

export const Title = styled(H200)`
  margin: ${space[1]} 0 ${space[2]};
  font-style: normal;

  ${mq.gtsm} {
    font-size: 38px;
    line-height: 42px;
  }
`;

export const PopupWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  padding: 0 ${H_PADDING_MOBILE};
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 150ms linear;
  opacity: ${(props) => (props.open ? 1 : 0)};
  pointer-events: ${(props) => (props.open ? 'auto' : 'none')};

  ${mq.gtsm} {
    padding: 0;
  }
`;
