import styled from 'styled-components';

import colors from '@utils/colors';
import space from '@utils/space';
import { ContentLabel as BaseContentLabel } from '@utils/type';
import BaseButton from '@components/Button';

export const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: ${space[13]};
  z-index: 0;
  background-color: ${colors.N100};
`;

export const Box = styled.div`
  z-index: 1;
  max-width: 620px;
`;

export const Button = styled(BaseButton)`
  position: absolute !important;
  bottom: 0;
  left: 0;
  margin-top: ${space[8]};
`;

export const ContentLabel = styled(BaseContentLabel)`
  color: ${colors.N500};
  margin-bottom: ${space[6]};
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  height: calc(820px - ${space[10]} - ${space[10]});
  padding: ${space[10]} ${space[7]};
`;
