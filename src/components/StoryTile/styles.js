import styled from 'styled-components';

import { mq } from '@utils/styles';
import colors from '@utils/colors';
import space from '@utils/space';
import { fonts, weights } from '@utils/fonts';
import { Body } from '@utils/type';

export const H3 = styled.h3`
  font-size: 1.2rem;
  font-family: ${fonts.NIMBUS};
  font-weight: ${weights.REGULAR};
`;

export const Tag = styled.span`
  font-size: 0.7rem;
  font-family: ${fonts.NIMBUS_CONDENSED};
  font-weight: ${weights.REGULAR};
  text-transform: uppercase;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: ${space[1]};
  padding: 0 15px;

  ${mq.gtmd} {
    padding: 0;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 100%;
  background-color: ${colors.N100};
`;

export const Lede = styled(Body)`
  margin-top: ${space[2]};
`;

export const Wrapper = styled.div``;
