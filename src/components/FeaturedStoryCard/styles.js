import styled from 'styled-components';

import colors from '@utils/colors';
import space from '@utils/space';
import { H600 as BaseH300 } from '@utils/type';

export const H600 = styled(BaseH300)`
  margin-bottom: ${space[1]};
`;

export const Image = styled.div`
  padding-bottom: 100%;
  background-color: ${colors.N100};
  background-image: ${props => `url(${props.image})`};
  background-position: center;
  background-size: cover;
`;

export const Info = styled.div`
  padding: ${space[2]} 0 ${space[5]};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
