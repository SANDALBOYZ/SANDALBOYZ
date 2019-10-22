import styled from 'styled-components';

import space, { H_PADDING, H_PADDING_MOBILE } from '@utils/space';
import { mq, Container as BaseContainer } from '@utils/styles';

const AUTO_GRID_MIN_SIZE = '20rem';

export const Container = styled(BaseContainer)`
  padding: 0;

  ${mq.gtmd} {
    padding: 0 ${H_PADDING_MOBILE};
  }

  ${mq.gtlg} {
    padding: 0 ${H_PADDING};
  }
`;

export const Stories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${AUTO_GRID_MIN_SIZE}, 1fr));
  grid-row-gap: ${space[4]};

  ${mq.gtmd} {
    grid-gap: ${space[2]};
  }
`;

export const Wrapper = styled.div`
  margin: ${space[6]} 0 ${space[8]};

  ${mq.gtlg} {
    margin: ${space[8]} 0;
  }
`;
