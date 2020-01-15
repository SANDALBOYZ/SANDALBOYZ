import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import get from 'lodash/get';

import { AbsoluteImg, Img } from '@utils/styles';
import * as styled from './styles';

class ProductImages extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
  };

  state = {
    activeIndex: 0,
    showModal: false,
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  handleModalClick = evt => {
    evt.stopPropagation();
  };

  handleNextImage = evt => {
    evt.stopPropagation();
    const { images } = this.props;
    const { activeIndex } = this.state;

    let nextIndex = activeIndex + 1;
    if (nextIndex > images.length - 1) nextIndex = 0;

    this.setState({ activeIndex: nextIndex });
  };

  handlePreviousImage = evt => {
    evt.stopPropagation();
    const { images } = this.props;
    const { activeIndex } = this.state;

    let nextIndex = activeIndex - 1;
    if (nextIndex < 0) nextIndex = images.length - 1;

    this.setState({ activeIndex: nextIndex });
  };

  handleSetIndex = idx => {
    this.setState({ activeIndex: idx });
  };

  handleZoom = () => {
    this.setState({
      showModal: true,
    });
  };

  render() {
    const { children, images } = this.props;
    const { activeIndex, showModal } = this.state;

    return (
      <>
        {showModal && (
          <styled.Modal onClick={this.handleClose}>
            <styled.ModalImage>
              <img
                alt=""
                src={get(
                  images[activeIndex],
                  'localFile.childImageSharp.fluid.src'
                )}
                onClick={this.handleModalClick}
              />
            </styled.ModalImage>
            <styled.Button onClick={this.handlePreviousImage}>
              <styled.Icon name="chevron-left" />
            </styled.Button>
            <styled.Button onClick={this.handleNextImage}>
              <styled.Icon name="chevron-right" />
            </styled.Button>
          </styled.Modal>
        )}
        <styled.Wrapper>
          <styled.MainImageWrapper onClick={this.handleZoom}>
            {get(images[activeIndex], 'localFile.childImageSharp.fluid') && (
              <Img
                fluid={get(
                  images[activeIndex],
                  'localFile.childImageSharp.fluid'
                )}
              />
            )}
            <styled.Button onClick={this.handlePreviousImage}>
              <styled.Icon name="chevron-left" />
            </styled.Button>
            <styled.Button onClick={this.handleNextImage}>
              <styled.Icon name="chevron-right" />
            </styled.Button>
            {children}
          </styled.MainImageWrapper>
          <styled.Thumbnails>
            {images.map((image, idx) => (
              <styled.ThumbnailWrapper
                key={idx}
                onClick={() => {
                  this.handleSetIndex(idx);
                }}
              >
                <styled.Thumbnail
                  fluid={get(image, 'localFile.childImageSharp.fluid')}
                />
              </styled.ThumbnailWrapper>
            ))}
          </styled.Thumbnails>
        </styled.Wrapper>
      </>
    );
  }
}

export default ProductImages;
