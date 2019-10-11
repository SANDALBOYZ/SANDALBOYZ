import styled from 'styled-components';

import colors from '@utils/colors';
import space, { H_PADDING_MOBILE } from '@utils/space';
import { mq } from '@utils/styles';
import { H300 as BaseH300 } from '@utils/type';

export const Actions = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
  right: ${H_PADDING_MOBILE};
  bottom: ${H_PADDING_MOBILE};
  left: ${H_PADDING_MOBILE};

  & > *:first-child {
    margin-top: ${space[2]};
  }

  ${mq.gtlg} {
    flex-direction: row;
    right: ${space[5]};
    bottom: ${space[5]};
    left: ${space[5]};

    & > *:first-child {
      margin-right: ${space[3]};
      margin-bottom: 0;
    }
  }
`;

export const Drawer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 100%;
  padding: ${H_PADDING_MOBILE};
  background-color: ${colors.N0};
  transition: transform 200ms ease-in-out;
  transform: ${props => (props.open ? 'translateX(0)' : 'translateX(100%)')};

  ${mq.gtlg} {
    width: 470px;
    max-width: 470px;
    padding: ${space[5]};
    transform: ${props => (props.open ? 'translateX(0)' : 'translateX(470px)')};
  }
`;

export const H300 = styled(BaseH300)`
  margin-bottom: ${space[4]};
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 48px;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 150ms linear;
  opacity: ${props => (props.open ? 1 : 0)};
  pointer-events: ${props => (props.open ? 'auto' : 'none')};

  ${mq.gtlg} {
    top: 80px;
  }
`;
