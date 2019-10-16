import styled from 'styled-components';

import space from '@utils/space';
import { mq, TextContainer } from '@utils/styles';

export const NoResults = styled.div`
  padding: ${space[8]} 0 0;
`;

export const Wrapper = styled(TextContainer)`
  margin-top: -${space[6]};
  margin-bottom: ${space[8]};

  ${mq.gtlg} {
    margin-top: -${space[8]};
    margin-bottom: 0;
  }
`;
