import styled from 'styled-components';

import colors from '@utils/colors';
import { mq } from '@utils/styles';
import space, { H_PADDING_MOBILE } from '@utils/space';

export const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 77%;
  background-color: ${colors.N100};

  & > *:last-child {
    opacity: 0;
    transition: opacity 0.25s linear;
  }

  &:hover {
    & > *:last-child {
      opacity: 1;
      transition: opacity 0.25s linear;
    }
  }
`;

export const Info = styled.div`
  padding: ${space[3]} ${H_PADDING_MOBILE} 0;

  ${mq.gtlg} {
    padding: ${space[1]} 0 ${space[5]};
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

export const ProductTileWrapper = styled.div`
  display: flex;
  opacity: 0;
  transform: translateY(50px);
  flex-direction: column;
  position: relative;
  margin-bottom: ${space[3]};

  ${mq.gtlg} {
    margin-bottom: 0;
  }

  &.visible {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.9s cubic-bezier(0.39, 0.575, 0.565, 1);
  }
`;
