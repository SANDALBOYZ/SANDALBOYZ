import styled from 'styled-components';

import colors from '@utils/colors';
import { mq } from '@utils/styles';
import space, { H_PADDING_MOBILE } from '@utils/space';

export const Image = styled.div`
  position: relative;
  padding-bottom: 77%;
  background-color: ${colors.N100};
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
`;

export const Info = styled.div`
  padding: ${space[3]} ${H_PADDING_MOBILE} 0;

  ${mq.gtlg} {
    padding: ${space[1]} 0 ${space[5]};
  }
`;

export const SoldOut = styled.div`
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: ${space[3]};

  ${mq.gtlg} {
    margin-bottom: 0;
  }
`;
