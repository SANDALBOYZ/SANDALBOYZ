import styled from 'styled-components';

import colors from '@utils/colors';
import space from '@utils/space';
import { Body, H400 as BaseH400, H600 as BaseH600 } from '@utils/type';

export const H400 = styled(BaseH400)`
`;

export const H600 = styled(BaseH600)`
  margin-bottom: ${space[1]};
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: ${space[1]};
`;

export const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 100%;
  background-color: ${colors.N100};
`;

export const Lede = styled(Body)`
  margin-top: ${space[2]};
`;

export const Wrapper = styled.div`

`;
