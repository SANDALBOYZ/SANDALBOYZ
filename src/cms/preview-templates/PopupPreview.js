import React from 'react';
import PropTypes from 'prop-types';

import Popup from '@components/Popup';

const PopupPreview = ({ entry }) => {
  return (
    <Popup
      description={entry.getIn(['data', 'description'])}
      expires={entry.getIn(['data', 'expires'])}
      image={{
        src: entry.getIn(['data', 'image']),
        srcSet: `${entry.getIn(['data', 'image'])} 2550w`,
        sizes: '(max-width: 2550px) 100vw, 2550px',
      }}
      label={entry.getIn(['data', 'label'])}
      title={entry.getIn(['data', 'title'])}
    />
  );
};

PopupPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }).isRequired,
};

export default PopupPreview;
