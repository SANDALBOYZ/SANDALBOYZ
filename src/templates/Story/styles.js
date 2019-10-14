import styled from 'styled-components';

import colors from '@utils/colors';
import fonts, { weights } from '@utils/fonts';
import space, { H_PADDING, H_PADDING_MOBILE } from '@utils/space';
import { mq, Container as BaseContainer } from '@utils/styles';
import { ContentLabel as BaseContentLabel } from '@utils/type';

export const Authors = styled.div`
  position: absolute;
  bottom: 0;
  left: ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    left: ${H_PADDING};
  }
`;

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

export const ContentLabel = styled(BaseContentLabel)`
  color: ${colors.N500};
`;

export const Hero = styled.div`
  padding-left: ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    position: relative;
    display: flex;
    align-items: flex-end;
    height: 820px;
    margin-bottom: ${space[8]};
    padding: ${space[10]} ${H_PADDING};
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
  }

  & blockquote * {
    max-width: ${space[17]};
    margin: ${space[6]} ${H_PADDING};
    font-family: ${fonts.CONDENSED};
    font-size: 54px;
    font-style: italic;
    font-weight: ${weights.BLACK};
    letter-spacing: 1px;
    line-height: 54px;
    text-transform: uppercase;
  }
`;
