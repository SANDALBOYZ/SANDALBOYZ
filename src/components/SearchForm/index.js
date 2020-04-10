import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import space from '@utils/space';
import { mq } from '@utils/styles';
import Button from '@components/Button';
import Input from '@components/formElements/Input';

const Form = styled.form`
  position: relative;
  display: flex;
  margin-bottom: ${space[4]};

  ${mq.gtlg} {
    margin-bottom: ${space[6]};
  }
`;

class SearchForm extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  state = {
    query: this.props.query || '',
  };

  handleChange = evt => {
    this.setState({ query: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSearch(this.state.query);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          name="search"
          onChange={this.handleChange}
          placeholder="Search"
          size="xlarge"
          value={this.state.query}
        />
        <Button size="large">Search</Button>
      </Form>
    );
  }
}

export default SearchForm;
