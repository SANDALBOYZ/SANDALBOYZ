import styled from 'styled-components';

import colors from '@utils/colors';
import space, { H_PADDING, H_PADDING_MOBILE } from '@utils/space';
import { mq, Container as BaseContainer } from '@utils/styles';
import { H500 as BaseH500 } from '@utils/type';
import BaseIcon from '@components/Icon';

export const ClearFilter = styled.button`
  background: transparent;
  border: 0;
  appearance: none;
  margin-left: ${space[0]};
  padding: 0;
  cursor: pointer;
  height: 30px;
  width: 30px;
  outline: 0;

  &:hover {
    background-color: ${colors.N800};
  }
`;

export const Container = styled(BaseContainer)`
  padding: 0;

  ${mq.gtmd} {
    padding: 0 ${H_PADDING_MOBILE};
  }

  ${mq.gtlg} {
    padding: 0 ${H_PADDING};
  }
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  margin-right: ${space[2]};
  margin-bottom: ${space[2]};
  padding: 0 0 0 8px;
  color: ${colors.N0};
  background-color: ${colors.N700};
  white-space: nowrap;

  ${mq.gtmd} {
    margin-bottom: 0;
  }
`;

export const H500 = styled(BaseH500)`
  width: 100%;
  margin-top: ${space[2]};
  margin-bottom: ${space[2]};
  margin-right: ${space[4]};

  ${mq.gtmd} {
    width: auto;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 ${H_PADDING_MOBILE} ${space[2]};

  ${mq.gtmd} {
    flex-wrap: nowrap;
    padding: 0;
  }
`;

export const Icon = styled(BaseIcon)`
  height: 16px;
  fill: ${colors.N0};
  vertical-align: middle;
  transform: translateY(1px);
`;

const M_AUTO_GRID_MIN_SIZE = '20rem';
const D_AUTO_GRID_MIN_SIZE = '22rem';

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${M_AUTO_GRID_MIN_SIZE}, 1fr));
  grid-row-gap: ${space[2]};

  ${mq.gtmd} {
    grid-template-columns: repeat(auto-fill, minmax(${D_AUTO_GRID_MIN_SIZE}, 1fr));
    grid-gap: ${space[2]};
  }
`;

export const Wrapper = styled.div`
  margin-bottom: ${space[8]};

  ${mq.gtlg} {
    margin-top: ${space[2]};
  }
`;
