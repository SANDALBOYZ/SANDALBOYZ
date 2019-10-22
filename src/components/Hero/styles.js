import styled from 'styled-components';

import colors from '@utils/colors';
import space, { H_PADDING, H_PADDING_MOBILE } from '@utils/space';
import { mq } from '@utils/styles';
import { H500 as BaseH500 } from '@utils/type';
import BaseButton from '@components/Button';

export const Background = styled.div`
  position: relative;
  padding-bottom: 95%;
  background-color: ${colors.N100};

  ${mq.gtlg} {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: ${space[13]};
    z-index: 0;
    padding-bottom: 0;
  }
`;

export const Box = styled.div`
  z-index: 1;
  max-width: 620px;
`;

export const Button = styled(BaseButton)`
  margin-top: ${space[6]};

  ${mq.gtlg} {
    position: absolute !important;
    bottom: 0;
    left: -1px;
    margin-top: ${space[8]};
  }
`;

export const H500 = styled(BaseH500)`
  margin: ${space[3]} 0 ${space[0]};
  color: ${colors.N600};

  ${mq.gtlg} {
    color: ${colors.N900};
    margin-bottom: ${space[4]};
  }
`;

export const Wrapper = styled.div`
  margin-top: 48px;
  margin-bottom: ${space[8]};
  padding-left: ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    position: relative;
    display: flex;
    align-items: flex-end;
    height: 820px;
    margin-top: 0;
    margin-bottom: ${space[9]};
    padding: ${space[10]} ${H_PADDING};
  }
`;
