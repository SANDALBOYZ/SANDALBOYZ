import styled from 'styled-components';

import colors from '@utils/colors';
import space from '@utils/space';
import { ContentLabel as BaseContentLabel, H200 as BaseH200 } from '@utils/type';
import BaseButton from '@components/Button';

export const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: ${space[11]};
  z-index: -1;
  background-color: ${colors.N100};
`;

export const Box = styled.div`
  max-width: calc(574px - ${space[7]} - ${space[7]});
  padding: ${space[7]};
  background-color: ${colors.N700};
`;

export const Button = styled(BaseButton)`
  margin-top: ${space[8]};
`;

export const ContentLabel = styled(BaseContentLabel)`
  color: ${colors.N600};
  margin-bottom: ${space[3]};
`;

export const H200 = styled(BaseH200)`
  color: ${colors.N0};
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 660px;
`;
