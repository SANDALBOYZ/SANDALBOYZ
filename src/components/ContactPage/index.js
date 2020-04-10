import React, { useState } from 'react';

import { Body } from '@utils/type';
import Button from '@components/Button';
import Input from '@components/formElements/Input';
import Textarea from '@components/formElements/Textarea';
import * as styled from './styles';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      {/* <styled.Container>
        <styled.HelpText>
          <styled.H200>I need help with an order!</styled.H200>
          <Body>
            Questions about your order? Please do not hesitate to use our yellow
            floating help widget to get in touch with a real life human being
            from SANDALBOYZ. We will respond to any and every topic regarding
            your order within 24 hours. Guaranteed to be robot free.
          </Body>
        </styled.HelpText>
        <styled.Form data-netlify="true" name="Contact Form" method="POST">
          <styled.H400>Human Contact Help Form</styled.H400>
          <styled.FormGroup>
            <Input
              label="Name"
              name="name"
              placeholder="Full name"
              value={name}
              onChange={evt => {
                setName(evt.target.value);
              }}
            />
            <Input
              label="Email Address"
              name="email"
              placeholder="email@example.com"
              type="email"
              value={email}
              onChange={evt => {
                setEmail(evt.target.value);
              }}
            />
            <Input
              label="Order Number (If Applicable)"
              name="orderNumber"
              placeholder="ABCDE123"
              value={orderNumber}
              onChange={evt => {
                setOrderNumber(evt.target.value);
              }}
            />
          </styled.FormGroup>
          <Textarea
            label="Message"
            name="message"
            value={message}
            onChange={evt => {
              setMessage(evt.target.value);
            }}
          />
          <input type="hidden" name="form-name" value="Contact Form" />
          <styled.FormActions>
            <Button size="small" type="submit">
              Send message
            </Button>
          </styled.FormActions>
        </styled.Form>
      </styled.Container> */}

      <styled.TalkWrapper>
        <styled.TextWrapper>
          <styled.H200>I need help with an order!</styled.H200>
          <Body>
            Questions about your order? Please do not hesitate to use our yellow
            floating help widget to get in touch with a real life human being
            from SANDALBOYZ. We will respond to any and every topic regarding
            your order within 24 hours. Guaranteed to be robot free{' '}
            <span role="img" aria-label="no">
              🚫
            </span>
            <span role="img" aria-label="robot">
              🤖
            </span>
            .
          </Body>
        </styled.TextWrapper>
        <styled.TextWrapper>
          <styled.H200>I just wanna talk!</styled.H200>
          <Body>
            Have a non-order related question? Press? Sales? Just need someone
            to talk to? Shoulder to lean on? Please direct all other inquiries
            to our catchall contact email. Emails regarding orders sent to this
            email address will (unfortunately) be laughed at and not responded
            to. Just kidding, we respond to everything.
          </Body>
        </styled.TextWrapper>
        <styled.Emails>
          <styled.Email>
            <styled.H600>Let's fucking talk:</styled.H600>
            <a href="mailto:contact@sandalboyz.com">
              <Body>contact@sandalboyz.com</Body>
            </a>
          </styled.Email>
        </styled.Emails>
      </styled.TalkWrapper>
    </>
  );
};

export default Contact;
