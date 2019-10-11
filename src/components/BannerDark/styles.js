import styled from 'styled-components';

import colors from '@utils/colors';
import space, { H_PADDING, H_PADDING_MOBILE } from '@utils/space';
import { mq } from '@utils/styles';
import { ContentLabel as BaseContentLabel, H200 as BaseH200 } from '@utils/type';
import BaseButton from '@components/Button';

export const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: ${space[8]};
  z-index: -1;
  background-color: ${colors.N100};

  ${mq.gtlg} {
    left: ${space[11]};
  }
`;

export const Box = styled.div`
  max-width: 574px;
  margin-right: ${H_PADDING_MOBILE};
  padding: ${space[5]} ${H_PADDING_MOBILE};
  background-color: ${colors.N700};

  ${mq.gtxs} {
    padding-right: ${space[6]};
  }

  ${mq.gtlg} {
    margin-right: 0;
    padding: ${space[7]} ${H_PADDING};
  }
`;

export const Button = styled(BaseButton)`
  margin-top: ${space[6]};

  ${mq.gtlg} {
    margin-top: ${space[8]};
  }
`;

export const ContentLabel = styled(BaseContentLabel)`
  color: ${colors.N600};
  margin-bottom: ${space[3]};
`;

export const H200 = styled(BaseH200)`
  color: ${colors.N0};
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 660px;
`;
