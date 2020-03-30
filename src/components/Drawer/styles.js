import styled, { keyframes } from 'styled-components';

import colors from '@utils/colors';
import space, { H_PADDING_MOBILE } from '@utils/space';
import { mq } from '@utils/styles';
import { H300 as BaseH300 } from '@utils/type';

export const Actions = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: ${space[6]};

  & > *:first-child {
    margin-top: ${space[2]};
  }

  ${mq.gtlg} {
    flex-direction: row;

    & > *:first-child {
      margin-top: 0;
      margin-right: ${space[3]};
      margin-bottom: 0;
    }
  }
`;

export const Drawer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 100%;
  padding: ${H_PADDING_MOBILE};
  background-color: ${colors.N0};
  transition: transform 500ms cubic-bezier(0.215, 0.610, 0.355, 1.000);
  transform: ${props => (props.open ? 'translateX(0)' : 'translateX(100%)')};
  overflow-y: auto;

  ${mq.gtmd} {
    width: 470px;
    max-width: 470px;
    padding: ${space[5]};
    transform: ${props => (props.open ? 'translateX(0)' : 'translateX(470px)')};
  }
`;

const loading = keyframes`
  0% {
    background-color: ${colors.SANDALBOYZ_ROSE};
  }

  33% {
    background-color: ${colors.SANDALBOYZ_OLIVE};
  }

  66% {
    background-color: ${colors.SANDALBOYZ_YELLOW};
  }

  100% {
    background-color: ${colors.SANDALBOYZ_NEUTRAL};
  }
`;

export const LoadingBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.5em;
  background-color: ${colors.SANDALBOYZ_ROSE};
  animation: ${loading} 1s infinite linear;
`;

export const H300 = styled(BaseH300)`
  margin-bottom: ${space[4]};
`;

export const DrawerWrapper = styled.div`
  position: fixed;
  top: 48px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background-color: ${props => (props.open ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)')};;
  transition: background-color 400ms ease-in;
  transition-delay: 250ms;
  opacity: 1;
  pointer-events: ${props => (props.open ? 'auto' : 'none')};

  ${mq.gtlg} {
    top: 0;
  }
`;
