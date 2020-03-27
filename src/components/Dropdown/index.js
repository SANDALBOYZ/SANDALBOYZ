import React, { useState } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import Icon from '@components/Icon';
import * as styled from './styles';

const Dropdown = ({
  onChange,
  options,
  placeholder,
  prefix,
  value: currentValue,
  dropUp,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <styled.Wrapper
      onClick={toggleOpen}
      onBlur={() => {
        setIsOpen(false);
      }}
      tabIndex={0}
    >
      {currentValue ? (
        <>
          {prefix && <span>{prefix}</span>}
          <styled.Value>
            {get(
              options.find(opt => opt.value === currentValue),
              'name'
            )}
          </styled.Value>
        </>
      ) : (
        <span>{placeholder}</span>
      )}
      {isOpen && (
        <styled.Dropdown optionsLength={options.length} dropUp={dropUp}>
          <div>
            {options.map(opt => (
              <styled.Option
                disabled={opt.disabled}
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                }}
              >
                {prefix && <span>{placeholder}</span>}
                <styled.Value>{opt.name}</styled.Value>
              </styled.Option>
            ))}
          </div>
        </styled.Dropdown>
      )}
      <Icon name="chevron-down" />
    </styled.Wrapper>
  );
};

Dropdown.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
      disabled: PropTypes.bool,
    })
  ),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  placeholder: PropTypes.string,
  prefix: PropTypes.string,
  dropUp: PropTypes.bool,
};

export default Dropdown;
