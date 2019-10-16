import styled from 'styled-components';

import colors from '@utils/colors';
import space, { H_PADDING_MOBILE } from '@utils/space';
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

  ${mq.gtlg} {
    margin-bottom: ${space[3]};
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
