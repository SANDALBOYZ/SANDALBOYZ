import styled from 'styled-components';

import colors from '@utils/colors';
import space, { H_PADDING, H_PADDING_MOBILE } from '@utils/space';
import { mq, Container as BaseContainer } from '@utils/styles';
import { H300, H500 } from '@utils/type';
import { fonts, weights } from '@utils/fonts';

import BaseIcon from '@components/Icon';

const AUTO_GRID_MIN_SIZE = '20rem';

export const ActiveFilter = styled.div`
  display: inline-flex;
  align-items: center;
  height: 30px;
  margin-right: ${space[2]};
  margin-bottom: ${space[2]};
  padding: 0 0 0 8px;
  color: ${colors.N0};
  background-color: ${colors.N700};
  white-space: nowrap;
`;

export const ActiveFilters = styled.div`

`;

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

  ${mq.gtxl} {
    display: flex;
  }
`;

export const Empty = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${space[8]} 0;
`;

export const Filter = styled.a`
  display: block;
  font-size: 15px;
  text-decoration: ${props => props.active ? 'underline' : 'none'};

  &:hover {
    text-decoration: underline;
  }
`;

export const Filters = styled.div`
  display: none;
  width: 280px;

  ${mq.gtxl} {
    display: block;
  }
`;

export const FilterTitle = styled.h3`
  font-size: 14px;
  font-family: ${fonts.NIMBUS_CONDENSED};
  font-weight: ${weights.REGULAR};
  text-transform: uppercase;
  margin: ${space[4]} 0 ${space[1]};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${space[3]} ${H_PADDING_MOBILE};

  ${mq.gtmd} {
    padding: ${space[3]} 0;
  }

  ${mq.gtlg} {
    padding: 0 0 ${space[3]};
  }

  ${mq.gtxl} {
    display: none;
  }
`;

export const Heading = styled(H300)`
  margin-bottom: ${space[2]};
`;

export const Icon = styled(BaseIcon)`
  height: 16px;
  fill: ${colors.N0};
  vertical-align: middle;
  transform: translateY(1px);
`;

export const Image = styled.img`
  height: 64px;
  margin-bottom: ${space[5]};
`;

export const SidebarTitle = styled.h2`
  font-size: 2rem;
  font-family: ${fonts.GRANVILLE};
  font-weight: ${weights.REGULAR};
  margin-bottom: ${space[4]};
`;

export const Stories = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${AUTO_GRID_MIN_SIZE}, 1fr));
  grid-row-gap: ${space[4]};

  ${mq.gtmd} {
    grid-gap: ${space[2]};
    grid-row-gap: ${space[4]};
  }
`;

export const Wrapper = styled.div`
  margin: 60px 0 ${space[8]};

  ${mq.gtlg} {
    margin: ${space[8]} 0;
  }
`;
