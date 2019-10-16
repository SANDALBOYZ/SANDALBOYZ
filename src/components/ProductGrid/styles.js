import styled from 'styled-components';

import space, { H_PADDING, H_PADDING_MOBILE } from '@utils/space';
import { mq, Container as BaseContainer } from '@utils/styles';
import { H500 as BaseH500 } from '@utils/type';

export const H500 = styled(BaseH500)`
  margin-top: ${space[2]};
  margin-bottom: ${space[2]};
  padding: 0 ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    padding: 0;
  }
`;

const AUTO_GRID_MIN_SIZE = '22rem';

export const Container = styled(BaseContainer)`
  padding: 0;

  ${mq.gtlg} {
    padding: 0 ${H_PADDING};
  }
`;

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${AUTO_GRID_MIN_SIZE}, 1fr));
  grid-row-gap: ${space[2]};

  ${mq.gtlg} {
    grid-gap: ${space[2]};
  }
`;

export const Wrapper = styled.div`
  margin-bottom: ${space[8]};

  ${mq.gtlg} {
    margin-top: ${space[2]};
  }
`;
