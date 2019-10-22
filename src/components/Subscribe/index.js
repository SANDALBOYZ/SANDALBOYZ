import React, { Component } from 'react';

import { H200 } from '@utils/type';
import Button from '@components/Button';
import Input from '@components/formElements/Input';
import * as styled from './styles';

class Subscribe extends Component {
  state = {
    email: '',
  };

  handleChange = evt => {
    this.setState({ email: evt.target.value });
  };

  render() {
    return (
      <styled.Wrapper>
        <H200>Subscribe to our mailing list.</H200>
        <styled.Form
          action="https://sandalboyz.us13.list-manage.com/subscribe/post?u=3f88b88a15f3d33d800b219a9&id=e87abd7b3e"
          method="post"
        >
          <Input
            name="EMAIL"
            size="large"
            type="email"
            placeholder="email@example.com"
            value={this.state.email}
            onChange={this.handleChange}
            aria-label="Email"
          />
          <Button>Subscribe</Button>
        </styled.Form>
      </styled.Wrapper>
    );
  }
}

export default Subscribe;
