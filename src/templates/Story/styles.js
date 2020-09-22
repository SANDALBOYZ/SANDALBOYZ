import styled from 'styled-components';

import colors from '@utils/colors';
import fonts, { weights } from '@utils/fonts';
import space, { H_PADDING, H_PADDING_MOBILE } from '@utils/space';
import { mq, Container as BaseContainer } from '@utils/styles';
import { ContentLabel as BaseContentLabel } from '@utils/type';

export const DateBox = styled.div`

`;

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

export const AuthorBox = styled.div`
  margin-right: 20px;
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
  & a {
    text-decoration: underline;
  }

  & em {
    font-style: italic;
  }

  & h1 {
    margin-bottom: 20px;
    font-family: ${fonts.CONDENSED};
    font-style: italic;
    font-size: 35px;
    font-weight: ${weights.BLACK};
    letter-spacing: -0.01em;
    line-height: 40px;
    text-transform: uppercase;
    margin: ${space[4]} auto;
    padding: 0 ${H_PADDING_MOBILE};
    max-width: ${space[15]};

    ${mq.gtlg} {
      padding: 0;
    }
  }

  & h2 {
    margin-bottom: 18px;
    font-family: ${fonts.CONDENSED};
    font-style: italic;
    font-size: 29px;
    font-weight: ${weights.BLACK};
    letter-spacing: -0.01em;
    line-height: 32px;
    text-transform: uppercase;
  }

  & h3 {
    margin-bottom: 16px;
    font-family: ${fonts.CONDENSED};
    font-style: italic;
    font-size: 24px;
    font-weight: ${weights.BLACK};
    letter-spacing: -0.01em;
    line-height: 28px;
    text-transform: uppercase;
  }

  & h4 {
    margin-bottom: 12px;
    font-family: ${fonts.CONDENSED};
    font-style: italic;
    font-size: 20px;
    font-weight: ${weights.BLACK};
    letter-spacing: -0.008em;
    line-height: 24px;
    text-transform: uppercase;
  }

  & h5 {
    margin-bottom: 8px;
    font-family: ${fonts.CONDENSED};
    font-style: italic;
    font-size: 16px;
    font-weight: ${weights.BOLD};
    letter-spacing: -0.006em;
    line-height: 20px;
    text-transform: uppercase;
  }

  & h6 {
    margin-bottom: 4px;
    font-family: ${fonts.CONDENSED};
    font-style: italic;
    font-size: 14px;
    font-weight: ${weights.BOLD};
    letter-spacing: -0.003em;
    line-height: 16px;
    text-transform: uppercase;
  }

  & strong {
    font-weight: ${weights.BOLD};
  }

  & b {
    font-weight: ${weights.BOLD};
  }

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

  & hr {
    width: 80%;

    ${mq.gtlg} {
      max-width: 800px;
    }
  }
`;
