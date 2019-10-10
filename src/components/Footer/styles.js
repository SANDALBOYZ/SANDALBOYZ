import styled from 'styled-components';

import colors from '@utils/colors';
import space from '@utils/space';
import { H600 as BaseH600 } from '@utils/type';
import BaseLogo from '@components/Logo';

export const Footer = styled.footer`
  border-top: 1px solid ${colors.N200};
  padding-bottom: ${space[7]};
`;

export const About = styled.div`
  max-width: ${space[13]};
  margin-right: ${space[8]};
`;

export const H600 = styled(BaseH600)`
  margin-bottom: ${space[3]};
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${space[7]} 0;
`;

export const Links = styled.div`
  display: flex;
`;

export const Section = styled.div`
  &:not(:last-child) {
    margin-right: ${space[8]};
  }
`;

export const Legal = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Logo = styled(BaseLogo)`
  height: 20px;
`;
