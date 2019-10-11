import styled from 'styled-components';

import colors from '@utils/colors';
import space from '@utils/space';

export const Image = styled.div`
  position: relative;
  padding-bottom: 77%;
  background-color: ${colors.N100};
`;

export const Info = styled.div`
  padding-top: ${space[1]};
  padding-bottom: ${space[5]};
`;

export const SoldOut = styled.div`
  position: absolute;
  top: ${space[2]};
  left: ${space[2]};
  z-index: 1;
  padding: 0 ${space[1]};
  color: ${colors.N0};
  background-color: ${colors.NEGATIVE};

  & > span {
    display: inline-block;
    transform: translateY(-1px);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
