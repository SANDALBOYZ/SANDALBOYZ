import styled from 'styled-components';

import space from '@utils/space';
import { H500 as BaseH500 } from '@utils/type';

export const H500 = styled(BaseH500)`
  margin-bottom: ${space[3]};
`;

const AUTO_GRID_MIN_SIZE = '22rem';

export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(${AUTO_GRID_MIN_SIZE}, 1fr));
  grid-gap: ${space[2]};
`;

export const Wrapper = styled.div`
  margin: ${space[2]} 0 ${space[8]};
`;
