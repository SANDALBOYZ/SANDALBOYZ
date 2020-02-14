import React, { useState } from 'react';
import get from 'lodash/get';

import Icon from '@components/Icon';
import * as styled from './styles';

const Dropdown = ({ onChange, options, placeholder, prefix, value }) => {
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
      {value ? (
        <>
          {prefix && <span>{prefix}</span>}
          <styled.Value>
            {get(options.find(opt => opt.value === value), 'name')}
          </styled.Value>
        </>
      ) : (
        <span>{placeholder}</span>
      )}
      {isOpen && (
        <styled.Dropdown>
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
                <styled.Value>
                  {opt.name}
                </styled.Value>
              </styled.Option>
            ))}
          </div>
        </styled.Dropdown>
      )}
      <Icon name="chevron-down" />
    </styled.Wrapper>
  );
};

export default Dropdown;
