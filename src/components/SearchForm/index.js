import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import space from '@utils/space';
import { mq } from '@utils/styles';
import { fonts, weights } from '@utils/fonts';
import colors from '@utils/colors';

import Input from '@components/formElements/Input';
import Icon from '@components/Icon';

const Form = styled.form`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: ${space[4]};

  ${mq.gtlg} {
    margin-bottom: ${space[6]};
  }
`;

export const SearchInput = styled.input`
  display: block;
  width: 100%;
  padding: 0 ${space[1]};
  font-family: ${fonts.NIMBUS};
  font-weight: ${weights.LIGHT};
  font-size: 12px;
  background: 0;
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

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSearch(query);
  };

  const searchOnChange = (evt) => {
    setQuery(evt.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchInput
        name="search"
        onChange={searchOnChange}
        placeholder="Search"
        size="xlarge"
        value={query}
      />
      <Button>
        <CaretRight name="caret-down" />
      </Button>
    </Form>
  );
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
