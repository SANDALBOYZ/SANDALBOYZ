import styled from 'styled-components';

import colors from '@utils/colors';
import space, { H_PADDING, H_PADDING_MOBILE } from '@utils/space';
import { mq } from '@utils/styles';
import { Body as BaseBody, H600 as BaseH600 } from '@utils/type';
import BaseIcon from '@components/Icon';

export const Body = styled(BaseBody)`
  margin-bottom: ${space[5]};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;

  ${mq.gtlg} {
    flex-direction: row;
    padding: ${space[4]} ${H_PADDING};
  }
`;

export const H600 = styled(BaseH600)`
  margin-bottom: ${space[2]};
`;

export const Icon = styled(BaseIcon)`
  fill: ${colors.N900};
  height: 16px;
`;

export const MobileProductInfo = styled.div`
  margin-bottom: ${space[3]};
  padding: 0 ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    display: none;
  }
`;

export const ProductInfo = styled.div`
  margin-bottom: ${space[8]};
  padding: 0 ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    width: 50%;
    margin-bottom: 0;
    padding: ${space[6]} ${space[7]};
  }
`;

export const Selections = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${space[1]} 0 ${space[6]};

  & label {
    flex: 1;

    &:first-of-type {
      margin-right: ${space[3]};
    }
  }

  & button {
    margin-top: ${space[3]};
    width: 100%;
  }

  ${mq.gtmd} {
    flex-wrap: nowrap;
    align-items: flex-end;
    margin: ${space[5]} 0 ${space[6]};

    & input {
      width: 12ch;
    }

    & label {
      flex: initial;
    }

    & button {
      width: auto;
    }

    & > *:not(:last-child) {
      margin-right: ${space[3]};
    }
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
