import styled from 'styled-components';

import colors from '@utils/colors';
import space, { H_PADDING_MOBILE } from '@utils/space';
import { mq } from '@utils/styles';
import { ContentLabel as BaseContentLabel } from '@utils/type';
import BaseButton from '@components/Button';

export const Background = styled.div`
  padding-bottom: 95%;
  background-color: ${colors.N100};
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;

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
    left: 0;
    margin-top: ${space[8]};
  }
`;

export const ContentLabel = styled(BaseContentLabel)`
  margin: ${space[3]} 0 ${space[0]};
  color: ${colors.N500};

  ${mq.gtlg} {
    margin-bottom: ${space[6]};
  }
`;

export const Wrapper = styled.div`
  padding-left: ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    position: relative;
    display: flex;
    align-items: flex-end;
    height: 820px;
    padding: ${space[10]} ${space[7]};
  }
`;
