import styled from 'styled-components';

import colors from '@utils/colors';
import fonts, { weights } from '@utils/fonts';
import space, { H_PADDING_MOBILE } from '@utils/space';
import { mq } from '@utils/styles';
import { Body as BaseBody, H400 as BaseH400 } from '@utils/type';

export const Body = styled(BaseBody)`
  text-align: center;
`;

export const Box = styled.div`
  width: 100%;
  max-width: ${space[13]};
  padding: ${space[5]} ${H_PADDING_MOBILE};
  background-color: ${colors.N0};
  box-shadow: 0 15px 15px -5px rgba(25, 25, 60, 0.06);

  ${mq.gtlg} {
    padding: ${space[6]};
  }
`;

export const ErrorText = styled.div`
  margin-top: ${space[2]};
  color: ${colors.NEGATIVE};
  font-size: 14px;
  text-align: center;
`;

export const H400 = styled(BaseH400)`
  margin-bottom: ${space[4]};
  text-align: center;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.centered ? 'center': 'space-between'};
  width: 100%;
  max-width: ${space[13]};
  padding: ${space[4]} 0;

  & > a {
    font-family: ${fonts.CONDENSED};
    font-size: 15px;
    font-weight: ${weights.BOLD};
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  ${mq.gtlg} {
    padding: ${space[4]};
  }
`;

export const Form = styled.form`
  & > *:last-child {
    margin-top: ${space[4]};
  }

  & > *:not(:last-child) {
    margin-bottom: ${space[2]};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: -${space[5]};
  margin-bottom: ${space[7]};
  padding: 0 ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    margin-top: -${space[7]};
    margin-bottom: 0;
    padding: 0;
  }
`;
