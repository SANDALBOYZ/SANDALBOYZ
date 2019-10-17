import styled from 'styled-components';

import colors from '@utils/colors';
import space from '@utils/space';
import { Container, mq } from '@utils/styles';

export const Address = styled.div`
  border: 1px solid ${colors.N200};
  padding: ${space[3]};
`;

export const AddressActions = styled.div`
  display: flex;
  margin-top: ${space[3]};

  & > *:first-child {
    margin-right: ${space[2]};
  }
`;

const AUTO_GRID_MIN_SIZE = '12rem';

export const Addresses = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${AUTO_GRID_MIN_SIZE}, 1fr));
  grid-gap: ${space[2]};
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  padding: ${space[8]} 0;
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
  margin-bottom: ${space[4]};

  ${mq.gtlg} {
    width: 50%;
    margin-bottom: 0;

    &:first-child {
      margin-right: ${space[8]};
    }
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  margin-bottom: ${space[2]};

  ${mq.gtlg} {
    margin-bottom: ${space[4]};
  }
`;

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  margin-bottom: ${space[8]};

  ${mq.gtlg} {
    flex-direction: row;
    margin-bottom: 0;
  }
`;
