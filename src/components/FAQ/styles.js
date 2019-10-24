import styled from 'styled-components';

import colors from '@utils/colors';
import space, { H_PADDING_MOBILE } from '@utils/space';
import { mq } from '@utils/styles';
import { Body } from '@utils/type';
import BaseIcon from '@components/Icon';

export const Answer = styled(Body)`
  max-width: ${space[14]};
  margin-bottom: ${space[3]};

  & a {
    text-decoration: underline;
  }

  & ul {
    list-style: disc;
    padding-left: 40px;
  }

  ${mq.gtlg} {
    margin-bottom: 0;
  }
`;

export const Question = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: ${space[2]} 0;
`;

export const Button = styled.button`
  display: inline-block;
  width: 100%;
  text-align: left;
  background-color: transparent;
  border: none;
  appearance: none;
  outline: 0;
  cursor: pointer;

  &:hover > ${Question} {
    color: ${colors.N600};
    fill: ${colors.N600};
  }

  ${mq.gtlg} {
    margin-bottom: ${space[3]};
  }
`;

export const Icon = styled(BaseIcon)`
  height: 24px;
  margin-left: ${space[4]};
`;

export const Wrapper = styled.div`
  max-width: ${space[15]};
  margin: 0 auto ${space[8]};
  padding: 0 ${H_PADDING_MOBILE} ${space[2]};

  ${mq.gtlg} {
    margin-bottom: 0;
  }
`;
