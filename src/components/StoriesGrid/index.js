import React from 'react';
import PropTypes from 'prop-types';

import StoryTile from '@components/StoryTile';
import * as styled from './styles';

const StoriesGrid = ({ stories }) => (
  <styled.Wrapper>
    <styled.Container>
      <styled.Stories>
        {stories.map(story => (
          <StoryTile key={story.id} {...story} />
        ))}
      </styled.Stories>
    </styled.Container>
  </styled.Wrapper>
);

StoriesGrid.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string,
    href: PropTypes.string.isRequired,
    image: PropTypes.object,
    title: PropTypes.string.isRequired,
  })),
};

export default StoriesGrid;
