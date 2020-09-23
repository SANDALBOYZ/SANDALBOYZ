import React, { useState } from 'react';
import styled from 'styled-components';

import { H200 } from '@utils/type';
import space from '@utils/space';
import { mq } from '@utils/styles';
import colors from '@utils/colors';
import fonts, { weights } from '@utils/fonts';

import Button from '@components/Button';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const SubscribeWrapper = styled.div`
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

export const EmailInput = styled.input`
  display: block;
  width: 100%;
  padding: 0 ${space[1]};
  font-family: ${fonts.STANDARD};
  font-weight: ${weights.LIGHT};
  font-size: 16px;
  background-color: ${colors.N0};
  border: 1px solid ${colors.N200};
  border-radius: 0;
  appearance: none;
  height: 40px;

  &::placeholder {
    color: ${colors.N500};
  }

  &:focus {
    outline: 0;
    border-color: ${colors.N500};
  }
`;

export const Subscribe = () => {
  const [email, setEmail] = useState('');

  return (
    <SubscribeWrapper>
      <H200>Newsletter</H200>
      <Form
        action="https://sandalboyz.us13.list-manage.com/subscribe/post?u=3f88b88a15f3d33d800b219a9&id=e87abd7b3e"
        method="post"
      >
        <EmailInput
          name="EMAIL"
          size="large"
          type="email"
          placeholder="email@example.com"
          value={email}
          onChange={event => setEmail(event.target.value)}
          aria-label="Email"
        />
        <Button size="small">Join</Button>
      </Form>
    </SubscribeWrapper>
  );
};

export default Subscribe;
