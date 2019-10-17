import styled from 'styled-components';

import colors from '@utils/colors';
import space, { H_PADDING, H_PADDING_MOBILE } from '@utils/space';
import { mq } from '@utils/styles';
import { ContentLabel as BaseContentLabel, H200 as BaseH200 } from '@utils/type';

export const Children = styled.div`
  position: absolute;
  bottom: 0;
  right: ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    right: ${H_PADDING};
  }
`;

export const ContentLabel = styled(BaseContentLabel)`
  position: relative;
  margin-bottom: ${space[2]};
  color: ${props => props.theme === 'dark' ? colors.N0 : colors.N900}
`;

export const H200 = styled(BaseH200)`
  position: relative;
  color: ${props => props.theme === 'dark' ? colors.N0 : colors.N900};

  ${mq.gtlg} {
    max-width: 50%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: ${props => props.shrinkOnMobile ? '240px' : '360px'};
  text-align: center;
  background-color: ${props => props.theme === 'dark' ? colors.N700 : colors.N0};

  ${mq.gtlg} {
    height: 360px;
  }
`;
