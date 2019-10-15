import React from 'react';

import { Body } from '@utils/type';
import Button from '@components/Button';
import Checkbox from '@components/formElements/Checkbox';
import Input from '@components/formElements/Input';
import Textarea from '@components/formElements/Textarea';
import * as styled from './styles';

const Contact = () => (
  <>
    <styled.Container>
      <styled.HelpText>
        <styled.H200>I need help with an order!</styled.H200>
        <Body>
          If you have any questions at all about your order at any point in
          time, please do not hesitate to use the form below to get in touch
          with a real life human being from SANDALBOYZ. We respond to any and
          every topic regarding your order within 24 hours.
        </Body>
      </styled.HelpText>
      <styled.Form>
        <styled.H400>Human Contact Help Form</styled.H400>
        <styled.FormGroup>
          <Input label="Name" name="name" placeholder="Full name" />
          <Input
            label="Email Address"
            name="email"
            placeholder="email@example.com"
            type="email"
          />
          <Input
            label="Order Number (If Applicable)"
            name="orderNumber"
            placeholder="ABCDE123"
          />
        </styled.FormGroup>
        <Textarea label="Message" name="message" />
        <styled.FormActions>
          <Checkbox label="Sign me up for the newsletter" name="newsletter" />
          <Button size="small" type="submit">
            Send message
          </Button>
        </styled.FormActions>
      </styled.Form>
    </styled.Container>
    <styled.TalkWrapper>
      <styled.TextWrapper>
        <styled.H400>I just wanna talk!</styled.H400>
        <Body>
          Have a non-order related question? Press? Sales? Just need someone to
          talk to? Shoulder to lean on? Please direct all other inquiries to our
          catchall contact email. Emails regarding orders sent to this address
          will unfortunately be laughed at and not responded to.
        </Body>
      </styled.TextWrapper>
      <styled.Emails>
        <styled.Email>
          <styled.H600>Press:</styled.H600>
          <Body>press@sandalboyz.com</Body>
        </styled.Email>
        <styled.Email>
          <styled.H600>General:</styled.H600>
          <Body>contact@sandalboyz.com</Body>
        </styled.Email>
        <styled.Email>
          <styled.H600>Support:</styled.H600>
          <Body>support@sandalboyz.com</Body>
        </styled.Email>
        <styled.Email>
          <styled.H600>Wholesale:</styled.H600>
          <Body>sales@sandalboyz.com</Body>
        </styled.Email>
      </styled.Emails>
    </styled.TalkWrapper>
  </>
);

export default Contact;
