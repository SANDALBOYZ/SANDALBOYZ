import styled from 'styled-components';

import colors from '@utils/colors';
import space from '@utils/space';
import { mq } from '@utils/styles';
import * as type from '@utils/type';

export const Body = styled(type.Body)`
  display: none;
  margin-bottom: ${space[5]};
  color: ${colors.N500};

  ${mq.gtmd} {
    display: block;
  }
`;

export const H400 = styled(type.H400)`
  margin-bottom: ${space[0]};
`;

export const H500 = styled(type.H500)`
  margin-bottom: ${space[0]};
`;

export const Image = styled.div`
  position: relative;
  width: 80px;
  background-color: ${colors.N100};

  ${mq.gtmd} {
    width: 300px;
  }
`;

export const Info = styled.div`
  flex: 1;
  padding: ${space[2]};

  ${mq.gtmd} {
    padding: ${space[6]};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  height: 80px;
  margin-bottom: ${space[3]};

  ${mq.gtmd} {
    height: 300px;
    margin-bottom: ${space[5]};
  }
`;
