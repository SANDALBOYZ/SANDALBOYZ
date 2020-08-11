import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import * as styled from './styles';

class ProductImages extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
    videos: PropTypes.arrayOf(PropTypes.object),
  };

  state = {
    activeIndex: null,
    showModal: false,
  };

  handleClose = () => {
    this.setState({ showModal: false, activeIndex: null });
  };

  handleModalClick = evt => {
    evt.stopPropagation();
  };

  handleZoom = idx => {
    this.setState({
      showModal: true,
      activeIndex: idx,
    });
  };

  render() {
    const { images, videos } = this.props;
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
        <styled.ProductImagesWrapper
          initial={{ opacity: 0, x: '8px' }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              ease: [0.19, 1, 0.22, 1],
              duration: 1.5,
              delay: 0.5,
            },
          }}
        >
          {images.map((image, idx) => (
            <styled.ImageWrapper
              key={idx}
              onClick={() => {
                this.handleZoom(idx);
              }}
            >
              <styled.Image
                fluid={get(image, 'localFile.childImageSharp.fluid')}
              />
            </styled.ImageWrapper>
          ))}
          {videos.map(video => (
            <styled.ImageWrapper key={video.id}>
              <styled.Video autoPlay loop>
                <source src={video.file.url} />
              </styled.Video>
            </styled.ImageWrapper>
          ))}
        </styled.ProductImagesWrapper>
      </>
    );
  }
}

export default ProductImages;
