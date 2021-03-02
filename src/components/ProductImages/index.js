import React, { useState } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import colors from '@utils/colors';
import space from '@utils/space';
import { Img, mq } from '@utils/styles';

import BaseIcon from '@components/Icon';

export const Button = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  height: 45px;
  width: 45px;
  margin: auto 0;
  background-color: ${colors.N0};
  border-radius: 100%;
  border: 0;
  appearance: none;
  cursor: pointer;
  outline: 0;
  opacity: 0;
  transform: translateY(5px);
  transition: opacity 150ms linear, transform 150ms ease;

  &:first-of-type {
    left: ${space[4]};

    & > * {
      transform: translateX(-1px);
    }
  }

  &:last-of-type {
    right: ${space[4]};

    & > * {
      transform: translateX(1px);
    }
  }

  &:hover {
    background-color: ${colors.N100};
  }

  ${mq.gtlg} {
    display: flex;
  }
`;

export const Icon = styled(BaseIcon)`
  fill: ${colors.N700};
  height: 24px;
`;

export const Modal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: zoom-out;
  padding: 20px;

  ${mq.gtlg} {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & ${Button} {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ModalImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: zoom-out;
  max-height: 100%;
`;

export const Image = styled(Img)`
  position: absolute !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 100%;
  background: transparent;
  border: 0;
  appearance: none;
  outline: 0;
  cursor: pointer;
  pointer-events: none; // Disables ghost modal opens on mobile.

  &:not(:last-child) {
    margin-bottom: ${space[3]};
  }

  ${mq.gtmd} {
    pointer-events: auto;
  }
`;

export const ProductImagesWrapper = styled(motion.div)`
  width: 100%;

  ${mq.gtlg} {
    width: 60%;
  }
`;

export const Video = styled.video`
  width: 100%;
`;

function ProductImages({ images, videos }) {
  const closeModal = () => {
    setModalOpen(false);
    setActiveIndex(null);
  };

  const handleZoom = idx => {
    setActiveIndex(idx);
    setModalOpen(true);
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {modalOpen && (
        <Modal onClick={closeModal}>
          <ModalImage>
            <img alt="" src={get(images[activeIndex], 'originalSrc')} />
          </ModalImage>
        </Modal>
      )}
      <ProductImagesWrapper
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
          <ImageWrapper
            key={idx}
            onClick={() => {
              handleZoom(idx);
            }}
          >
            <Image fluid={get(image, 'localFile.childImageSharp.fluid')} />
          </ImageWrapper>
        ))}
        {videos.map(video => (
          <ImageWrapper key={video.id}>
            <Video autoBuffer autoPlay loop muted playsInline>
              <source src={video.file.url} />
            </Video>
          </ImageWrapper>
        ))}
      </ProductImagesWrapper>
    </>
  );
}

ProductImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  videos: PropTypes.arrayOf(PropTypes.object),
};

export default ProductImages;
