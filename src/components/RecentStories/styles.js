import styled from 'styled-components';

import colors from '@utils/colors';
import space, { H_PADDING, H_PADDING_MOBILE } from '@utils/space';
import { Container as BaseContainer, mq } from '@utils/styles';
import { H500 as BaseH500, H600 as BaseH300 } from '@utils/type';

export const H500 = styled(BaseH500)`
  margin-top: ${space[2]};
  margin-bottom: ${space[2]};
  padding: 0 ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    padding: 0;
  }
`;

export const H600 = styled(BaseH300)`
  margin-bottom: ${space[1]};
`;

export const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 100%;
  background-color: ${colors.N100};
  overflow: hidden;

  & > div {
    transform: scale(1);
    transition: transform 500ms linear;
  }

  & img {
    backface-visibility: hidden;
    transform: translateZ(0);
  }
`;

export const Info = styled.div`
  padding: ${space[3]} ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    padding: ${space[2]} 0 ${space[5]};
  }
`;

export const Inner = styled.div`
  & > :first-child {
    margin-bottom: ${space[2]};
  }

  ${mq.gtlg} {
    display: flex;

    & > :first-child {
      margin-right: ${space[3]};
      margin-bottom: 0;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  &:hover ${ImageWrapper} > div {
    transform: scale(1.05);
  }
`;


export const Container = styled(BaseContainer)`
  margin-bottom: ${space[8]};
  padding: 0;

  ${mq.gtlg} {
    margin-bottom: ${space[9]};
    padding: 0 ${H_PADDING};
  }
`;
