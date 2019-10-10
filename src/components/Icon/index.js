import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import paths from './paths';

const SVG = styled.svg`
  flex-shrink: 0;
  backface-visibility: hidden;

  &:not(:root) {
    overflow: hidden;
  }
`;

const Icon = ({ className, name }) => {
  if (!paths[name]) {
    return null;
  }

  return (
    <SVG className={className} viewBox="0 0 24 24">
      {paths[name]}
    </SVG>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(paths)),
};

export default Icon;
