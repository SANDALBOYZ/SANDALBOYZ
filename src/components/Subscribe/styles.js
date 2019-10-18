import styled from 'styled-components';

import space from '@utils/space';
import { mq } from '@utils/styles';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: ${space[4]};

  & > :first-child {
    margin-bottom: ${space[3]};
  }

  ${mq.gtmd} {
    flex-direction: row;
    width: ${space[13]};
    margin-top: ${space[6]};

    & > :first-child {
      margin-right: ${space[1]};
      margin-bottom: 0;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${space[2]} 0 ${space[7]};
  text-align: center;

  ${mq.gtmd} {
    margin-top: ${space[6]};
  }

  ${mq.gtlg} {
    margin-top: ${space[10]};
    margin-bottom: ${space[8]};
  }
`;
