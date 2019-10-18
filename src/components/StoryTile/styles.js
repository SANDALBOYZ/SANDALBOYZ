import styled from 'styled-components';

import colors from '@utils/colors';
import space from '@utils/space';
import { H400 as BaseH400, H600 as BaseH600 } from '@utils/type';

export const H400 = styled(BaseH400)`
  color: ${colors.N0};
`;

export const H600 = styled(BaseH600)`
  margin-bottom: ${space[1]};
  color: ${colors.N0};
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: ${space[4]};
`;

export const Overlay = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 140px;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

export const Wrapper = styled.div`
  position: relative;
  padding-bottom: 77%;
  background-color: ${colors.N100};
`;
