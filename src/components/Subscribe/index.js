import React, { useState } from 'react';
import styled from 'styled-components';

import space from '@utils/space';
import { mq } from '@utils/styles';
import colors from '@utils/colors';
import { fonts, weights } from '@utils/fonts';

import Icon from '@components/Icon';

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

export const Title = styled.caption`
  align-self: flex-start;
  font-family: ${fonts.NIMBUS_CONDENSED};
  font-size: 12px;
  font-weight: ${weights.LIGHT};
  text-transform: uppercase;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

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

export const EmailInput = styled.input`
  display: block;
  width: 100%;
  padding: 0 ${space[1]};
  font-family: ${fonts.NIMBUS};
  font-weight: ${weights.LIGHT};
  font-size: 12px;
  background-color: ${colors.N0};
  border: 1px solid #333;
  border-radius: 0;
  appearance: none;
  height: 36px;

  &::placeholder {
    color: ${colors.N500};
  }

  &:focus {
    outline: 0;
    border-color: ${colors.N500};
  }
`;

export const Button = styled.button`
  border: 1px solid #333;
  border-left: 0;
  background: 0;
  outline: 0;
  height: 36px;
  width: 36px;
  font-size: 10px;
`;

export const CaretRight = styled(Icon)`
  height: 9px;
  width: 9px;
  transform: rotate(-90deg);
`;

export const Subscribe = () => {
  const [email, setEmail] = useState('');

  return (
    <SubscribeWrapper>
      <Title>Newsletter</Title>
      <Form
        action="https://sandalboyz.us13.list-manage.com/subscribe/post?u=3f88b88a15f3d33d800b219a9&id=e87abd7b3e"
        method="post"
      >
        <EmailInput
          name="EMAIL"
          size="large"
          type="email"
          placeholder="hello@youareawesome.com"
          value={email}
          onChange={event => setEmail(event.target.value)}
          aria-label="Email"
        />
        <Button><CaretRight name='caret-down' /></Button>
      </Form>
    </SubscribeWrapper>
  );
};

export default Subscribe;
