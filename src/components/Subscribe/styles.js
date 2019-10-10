import styled from 'styled-components';

import space from '@utils/space';

export const Form = styled.form`
  display: flex;
  width: ${space[13]};
  margin-top: ${space[6]};

  & > :first-child {
    margin-right: ${space[1]};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${space[2]} 0 ${space[8]};
  text-align: center;
`;
