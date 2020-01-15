import styled from 'styled-components';

import colors from '@utils/colors';
import space, { H_PADDING, H_PADDING_MOBILE } from '@utils/space';
import { Img, mq } from '@utils/styles';
import BaseIcon from '@components/Icon';

export const Button = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  height: 45px;
  width: 45px;
  margin: auto 0;
  background-color: ${colors.N0};
  border-radius: 100%;
  border: 0;
  appearance: none;
  cursor: pointer;
  outline: 0;
  opacity: 0;
  transform: translateY(5px);
  transition: opacity 150ms linear, transform 150ms ease;

  &:first-of-type {
    left: ${space[4]};

    & > * {
      transform: translateX(-1px);
    }
  }

  &:last-of-type {
    right: ${space[4]};

    & > * {
      transform: translateX(1px);
    }
  }

  &:hover {
    background-color: ${colors.N100};
  }

  ${mq.gtlg} {
    display: flex;
  }
`;

export const Icon = styled(BaseIcon)`
  fill: ${colors.N700};
  height: 24px;
`;

export const MainImage = styled(Img)`
`;

export const MainImageWrapper = styled.div`
  position: relative;
  margin-bottom: ${space[2]};
  cursor: zoom-in;

  & > div > div {
    padding-bottom: 100%;
  }

  ${mq.gtlg} {
    margin-bottom: ${space[3]};
  }

  &:hover ${Button} {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Modal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: zoom-out;

  ${mq.gtlg} {
    display: block;
  }

  & ${Button} {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ModalImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: ${H_PADDING};
  right: ${H_PADDING};
  bottom: ${H_PADDING};
  left: ${H_PADDING};
  cursor: zoom-out;

  & img {
    max-height: 100%;
    cursor: default;
  }
`;

export const Thumbnail = styled(Img)`
  position: absolute !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const ThumbnailWrapper = styled.button`
  position: relative;
  height: 0;
  padding-bottom: 100%;
  background: transparent;
  border: 0;
  appearance: none;
  outline: 0;
  cursor: pointer;
`;

export const Thumbnails = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${space[2]};
  padding: 0 ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: ${space[3]};
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;

  ${mq.gtlg} {
    width: 50%;
  }
`;
