import styled from 'styled-components';

import colors from '@utils/colors';
import space from '@utils/space';
import { Container, mq } from '@utils/styles';

export const Address = styled.div`
  border: 1px solid ${colors.N200};
  padding: ${space[3]};
`;

const AUTO_GRID_MIN_SIZE = '22rem';

export const Addresses = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${AUTO_GRID_MIN_SIZE}, 1fr));
  grid-row-gap: ${space[2]};
`;

export const Order = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${space[3]};
  border: 1px solid ${colors.N200};

  &:not(:last-child) {
    margin-bottom: ${space[3]};
  }
`;

export const Section = styled.div`
  ${mq.gtlg} {
    width: 50%;

    &:first-child {
      margin-right: ${space[8]};
    }
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${space[4]};
`;

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;

  ${mq.gtlg} {
    flex-direction: row;
  }
`;
