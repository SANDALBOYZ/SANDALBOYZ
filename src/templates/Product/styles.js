import styled from 'styled-components';

import colors from '@utils/colors';
import space from '@utils/space';
import { Container as BaseContainer, mq } from '@utils/styles';
import { Body as BaseBody, H600 as BaseH600 } from '@utils/type';
import BaseIcon from '@components/Icon';

export const Body = styled(BaseBody)`
  margin-bottom: ${space[5]};
`;

export const Container = styled(BaseContainer)`
  display: flex;
  margin-top: 80px;

  ${mq.gtlg} {
    padding-top: ${space[4]};
  }
`;

export const H600 = styled(BaseH600)`
  margin-bottom: ${space[2]};
`;

export const Icon = styled(BaseIcon)`
  fill: ${colors.N900};
  height: 16px;
`;

export const ProductInfo = styled.div`
  width: 50%;
  padding: ${space[6]} ${space[7]};
`;

export const Selections = styled.div`
  display: flex;
  align-items: flex-end;
  margin: ${space[5]} 0 ${space[6]};

  & input {
    width: 12ch;
  }

  & > *:not(:last-child) {
    margin-right: ${space[2]};
  }
`;

export const Sizing = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${space[5]};
  cursor: pointer;

  & > *:first-child {
    margin-right: ${space[2]};
  }

  & > svg {
    height: 18px;
  }
`;

export const Social = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: ${space[4]};
  }
`;
