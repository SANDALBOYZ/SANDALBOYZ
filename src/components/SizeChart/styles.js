import styled from 'styled-components';

import colors from '@utils/colors';
import space, { H_PADDING_MOBILE } from '@utils/space';
import { Body as BaseBody, H300 as BaseH300 } from '@utils/type';

export const Body = styled(BaseBody)`
  color: ${colors.N0};
  line-height: 20px;
`;

export const H300 = styled(BaseH300)`
  margin-bottom: ${space[2]};
  color: ${colors.N0};
`;

export const Inner = styled.div`
  margin: auto;
  max-width: 100%;
  padding: ${H_PADDING_MOBILE};

  & table {
    width: 100%;
    margin: ${space[4]} 0 ${space[1]};
    border-collapse: collapse;
    border-spacing: 0;
  }

  & td {
    text-align: left;
    padding: 10px;
    border: 1px solid ${colors.N0};
  }
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  ${'' /* padding-top: ${space[6]}; */}
  color: ${colors.N0};
  background-color: rgba(0, 0, 0, 0.8);
  opacity: ${props => props.open ? 1 : 0};
  pointer-events: ${props => props.open ? 'auto' : 'none'};
  transition: opacity 150ms linear;
  ${'' /* overflow: auto; */}
`;
