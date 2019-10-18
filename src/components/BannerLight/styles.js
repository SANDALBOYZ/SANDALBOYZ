import styled from 'styled-components';

import colors from '@utils/colors';
import space, { H_PADDING, H_PADDING_MOBILE } from '@utils/space';
import { mq } from '@utils/styles';
import { H500 as BaseH500 } from '@utils/type';
import BaseButton from '@components/Button';

export const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: ${colors.N100};
`;

export const Box = styled.div`
  max-width: 700px;
  margin-right: ${space[4]};
  padding: ${space[5]} ${H_PADDING_MOBILE} 0;
  background-color: ${colors.N0};

  ${mq.gtlg} {
    margin-right: 0;
    padding: ${space[7]} ${H_PADDING} 0;
  }
`;

export const Button = styled(BaseButton)`
  margin-top: ${space[6]};

  ${mq.gtlg} {
    margin-top: ${space[8]};
  }
`;

export const H500 = styled(BaseH500)`
  color: ${colors.N700};
  margin-bottom: ${space[3]};
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 480px;
  margin-bottom: ${space[8]};

  ${mq.gtlg} {
    height: 660px;
    margin-bottom: ${space[9]};
  }
`;
