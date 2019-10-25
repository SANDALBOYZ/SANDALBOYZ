import styled from 'styled-components';

import colors from '@utils/colors';
import fonts, { weights } from '@utils/fonts';
import space, { H_PADDING, H_PADDING_MOBILE } from '@utils/space';
import { mq, Container as BaseContainer } from '@utils/styles';
import { ContentLabel as BaseContentLabel } from '@utils/type';

export const Authors = styled.div`
  margin: 0 0 ${space[6]};
  padding-left: ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    position: absolute;
    bottom: 0;
    left: ${H_PADDING};
    padding-left: 0;
  }
`;

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
  padding: ${space[2]} ${H_PADDING_MOBILE} ${space[4]};

  ${mq.gtlg} {
    max-width: 620px;
    padding: ${space[2]} 0 ${space[4]};
  }
`;

export const ContentLabel = styled(BaseContentLabel)`
  color: ${colors.N500};
`;

export const Hero = styled.div`
  ${mq.gtlg} {
    position: relative;
    display: flex;
    align-items: center;
    height: 820px;
    margin-bottom: ${space[8]};
    padding: 0 ${H_PADDING};
  }
`;

export const Lede = styled(BaseContainer)`
  margin-bottom: ${space[6]};
`;

export const Sections = styled.div`
  & p {
    font-family: ${fonts.STANDARD};
    font-size: 15px;
    font-weight: ${weights.LIGHT};
    line-height: 28px;
    max-width: ${space[15]};
    margin: ${space[4]} auto;
    padding: 0 ${H_PADDING_MOBILE};

    ${mq.gtlg} {
      padding: 0;
    }
  }

  & blockquote * {
    max-width: ${space[17]};
    margin: ${space[4]} 0;
    font-family: ${fonts.CONDENSED};
    font-size: 32px;
    font-style: italic;
    font-weight: ${weights.BLACK};
    letter-spacing: 1px;
    line-height: 32px;
    text-transform: uppercase;

    ${mq.gtlg} {
      margin: ${space[6]} ${H_PADDING};
      font-size: 54px;
      line-height: 54px;
    }
  }
`;
