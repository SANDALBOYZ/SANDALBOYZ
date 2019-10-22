import styled from 'styled-components';

import colors from '@utils/colors';
import space from '@utils/space';
import { mq } from '@utils/styles';
import { H600 as BaseH600 } from '@utils/type';
import BaseLogo from '@components/Logo';

export const About = styled.div`

  ${mq.gtlg} {
    max-width: ${space[13]};
    margin-right: ${space[8]};
  }
`;

export const Footer = styled.footer`
  border-top: 1px solid ${colors.N200};
  padding-bottom: ${space[4]};

  ${mq.gtlg} {
    padding-bottom: ${space[7]};
  }
`;

export const H600 = styled(BaseH600)`
  margin-bottom: ${space[3]};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column-reverse;
  padding: ${space[6]} 0;

  ${mq.gtlg} {
    flex-direction: row;
    justify-content: space-between;
    padding: ${space[7]} 0;
  }
`;

export const Legal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${mq.gtmd} {
    flex-wrap: nowrap;
  }
`;

export const Logo = styled(BaseLogo)`
  height: 12px;

  ${mq.gtlg} {
    height: 20px;
  }
`;

export const Section = styled.div`
  width: 50%;
  margin-bottom: ${space[6]};

  & p {
    line-height: 40px;
  }

  ${mq.gtlg} {
    & p {
      line-height: 28px;
    }

    &:not(:last-child) {
      margin-right: ${space[8]};
    }
  }
`;
