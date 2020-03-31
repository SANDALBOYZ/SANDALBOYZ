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
  showIcon,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <styled.DropdownWrapper
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
      {showIcon && <Icon name="chevron-down" />}
    </styled.DropdownWrapper>
  );
};

Dropdown.propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      disabled: PropTypes.bool,
    })
  ),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  prefix: PropTypes.string,
  dropUp: PropTypes.bool,
  showIcon: PropTypes.bool,
};

Dropdown.defaultProps = {
  showIcon: true,
};

export default Dropdown;
