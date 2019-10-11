import styled from 'styled-components';

import colors from '@utils/colors';
import space from '@utils/space';
import { ContentLabel as BaseContentLabel, H200 as BaseH200 } from '@utils/type';

export const ContentLabel = styled(BaseContentLabel)`
  position: relative;
  margin-bottom: ${space[2]};
  color: ${colors.N0};
`;

export const H200 = styled(BaseH200)`
  position: relative;
  max-width: 50%;
  color: ${colors.N0};
`;

export const Overlay = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  height: 240px;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  height: 500px;
  padding: ${space[6]} 80px;
  background-color: ${colors.N100};
`;
