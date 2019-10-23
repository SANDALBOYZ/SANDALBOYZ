import styled from 'styled-components';

import colors from '@utils/colors';
import space, { H_PADDING, H_PADDING_MOBILE } from '@utils/space';
import { mq } from '@utils/styles';
import { ContentLabel as BaseContentLabel, H200 as BaseH200 } from '@utils/type';

export const ContentLabel = styled(BaseContentLabel)`
  position: relative;
  margin-bottom: ${space[2]};
  color: ${colors.N0};
`;

export const H200 = styled(BaseH200)`
  position: relative;
  color: ${colors.N0};
`;

export const Inner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: ${space[5]} ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    padding: ${space[6]} ${H_PADDING};
  }
`;

export const Overlay = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  height: 240px;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

export const Wrapper = styled.div`
  position: relative;
  padding-bottom: 106.25%;
  background-color: ${colors.N100};

  ${mq.gtlg} {
    height: 500px;
    padding-bottom: 0;
  }
`;
