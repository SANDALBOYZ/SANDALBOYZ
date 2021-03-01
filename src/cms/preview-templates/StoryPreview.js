// TODO: DEPRECATE
import PropTypes from 'prop-types';

const StoryPreview = ({ entry }) => {
  return null;
};

StoryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }).isRequired,
};

export default StoryPreview;
