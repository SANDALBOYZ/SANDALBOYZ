import React, { Component } from 'react';

import { H200 } from '@utils/type';
import Button from '@components/Button';
import Input from '@components/formElements/Input';
import * as styled from './styles';

class Subscribe extends Component {
  render() {
    return (
      <styled.Wrapper>
        <H200>Subscribe to our mailing list.</H200>
        <styled.Form>
          <Input name="email" size="large" type="email" placeholder="email@example.com" />
          <Button>Subscribe</Button>
        </styled.Form>
      </styled.Wrapper>
    );
  }
}

export default Subscribe;
