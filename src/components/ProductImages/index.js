import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import * as styled from './styles';

class ProductImages extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
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
    const { images } = this.props;
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
        </styled.Wrapper>
      </>
    );
  }
}

export default ProductImages;
