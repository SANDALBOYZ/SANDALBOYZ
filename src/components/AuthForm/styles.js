import styled from 'styled-components';

import colors from '@utils/colors';
import fonts, { weights } from '@utils/fonts';
import space from '@utils/space';
import { H400 as BaseH400 } from '@utils/type';

export const Box = styled.div`
  padding: ${space[6]};
  width: ${space[13]};
  background-color: ${colors.N0};
  box-shadow: 0 15px 15px -5px rgba(25, 25, 60, 0.06);
`;

export const H400 = styled(BaseH400)`
  margin-bottom: ${space[4]};
  text-align: center;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => props.centered ? 'center': 'space-between'};
  width: ${space[13]};
  padding: ${space[4]};

  & > a {
    font-family: ${fonts.CONDENSED};
    font-size: 15px;
    font-weight: ${weights.BOLD};
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

export const Form = styled.form`
  margin-bottom: ${space[4]};

  & > *:not(:last-child) {
    margin-bottom: ${space[2]};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: -${space[7]};
`;
