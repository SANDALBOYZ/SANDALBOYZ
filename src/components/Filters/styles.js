import styled, { css } from 'styled-components';

import colors from '@utils/colors';
import space from '@utils/space';

export const Filter = styled.div`
  flex: 1;

  & > :first-child {
    margin-bottom: ${space[4]};
  }
`;

export const Filters = styled.div`
  display: flex;
  margin-top: ${space[6]};
  margin-bottom: ${space[4]};
`;

export const Option = styled.button`
  display: block;
  background: transparent;
  border: none;
  margin-bottom: ${space[0]};
  padding: 0;
  cursor: pointer;
  outline: 0;

  ${props => props.selected && css`
    border-bottom: 1px solid ${colors.N600};
  `}
`;
