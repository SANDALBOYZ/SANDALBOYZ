import styled from 'styled-components';

import colors from '@utils/colors';
import space from '@utils/space';
import { H300 as BaseH300 } from '@utils/type';

export const Actions = styled.div`
  position: absolute;
  display: flex;
  right: ${space[5]};
  bottom: ${space[5]};
  left: ${space[5]};

  & > *:first-child {
    margin-right: ${space[3]};
  }
`;

export const Drawer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 470px;
  max-width: calc(470px - ${space[5]} - ${space[5]});
  padding: ${space[5]};
  background-color: ${colors.N0};
  transition: transform 200ms ease-in-out;
  transform: ${props => (props.open ? 'translateX(0)' : 'translateX(470px)')};
`;

export const H300 = styled(BaseH300)`
  margin-bottom: ${space[4]};
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 80px;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 150ms linear;
  opacity: ${props => (props.open ? 1 : 0)};
  pointer-events: ${props => (props.open ? 'auto' : 'none')};
`;
