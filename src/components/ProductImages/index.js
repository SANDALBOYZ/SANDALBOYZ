import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import { Img } from '@utils/styles';
import * as styled from './styles';

class ProductImages extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
  };

  state = {
    activeIndex: 0,
  };

  handleNextImage = () => {
    const { images } = this.props;
    const { activeIndex } = this.state;

    let nextIndex = activeIndex + 1;
    if (nextIndex > images.length - 1) nextIndex = 0;

    this.setState({ activeIndex: nextIndex });
  };

  handlePreviousImage = () => {
    const { images } = this.props;
    const { activeIndex } = this.state;

    let nextIndex = activeIndex - 1;
    if (nextIndex < 0) nextIndex = images.length - 1;

    this.setState({ activeIndex: nextIndex });
  };

  handleSetIndex = idx => {
    this.setState({ activeIndex: idx });
  };

  render() {
    const { images } = this.props;
    const { activeIndex } = this.state;

    return (
      <styled.Wrapper>
        <styled.MainImageWrapper>
          {get(images[activeIndex], 'localFile.childImageSharp.fluid') && (
            <Img fluid={get(images[activeIndex], 'localFile.childImageSharp.fluid')} />
          )}
          <styled.Button onClick={this.handlePreviousImage}>
            <styled.Icon name="chevron-left" />
          </styled.Button>
          <styled.Button onClick={this.handleNextImage}>
            <styled.Icon name="chevron-right" />
          </styled.Button>
        </styled.MainImageWrapper>
        <styled.Thumbnails>
          {images.map((image, idx) => (
            <styled.ThumbnailWrapper
              key={idx}
              onClick={() => {
                this.handleSetIndex(idx);
              }}
            >
              <styled.Thumbnail fluid={get(image, 'localFile.childImageSharp.fluid')} />
            </styled.ThumbnailWrapper>
          ))}
        </styled.Thumbnails>
      </styled.Wrapper>
    );
  }
}

export default ProductImages;
