import styled from 'styled-components';

import space, { H_PADDING_MOBILE } from '@utils/space';
import { mq } from '@utils/styles';
import { fonts } from '@utils/fonts';

export const H2 = styled.h2`
  font-family: ${fonts.GRANVILLE};
  font-size: 1.2rem;
  margin-bottom: ${space[3]};
`;

export const HelpText = styled.div`
  width: 100%;
  margin-top: ${space[4]};
  margin-bottom: ${space[6]};

  ${mq.gtlg} {
    width: 50%;
    margin-right: ${space[8]};
    margin-bottom: 0;
  }
`;

export const TalkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${space[8]};
  margin-bottom: ${space[8]};
  padding: 0 ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    align-items: center;
    margin-top: 0;
    padding: ${space[10]} 0 ${space[4]};
    text-align: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: ${space[14]};
  margin-bottom: ${space[7]};
`;
