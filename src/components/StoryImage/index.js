import React from 'react';
import styled, { css } from 'styled-components';
import Image from 'gatsby-image';
import get from 'lodash/get';

import colors, { randomSandalboyzColor } from '@utils/colors';
import space, { H_PADDING, H_PADDING_MOBILE } from '@utils/space';
import { AbsoluteImg, mq } from '@utils/styles';
import { H400 } from '@utils/type';

const doubleImage = css`
  position: relative;
  width: 100%;
`;

const DoubleImageOne = styled.div`
  ${doubleImage}
  margin-right: ${space[4]};
`;

const DoubleImageTwo = styled.div`
  ${doubleImage}
`;

const DoubleWrapper = styled.div`
  position: relative;
  background-color: ${colors.N100};
  display: flex;
  margin: ${space[7]} ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    margin: ${space[9]} ${H_PADDING};
  }
`;

export const DoubleImage = ({ images }) => (
  <DoubleWrapper>
    <DoubleImageOne>
      {get(images, '0') && (
        <Image fluid={images[0]} backgroundColor={randomSandalboyzColor()} />
      )}
    </DoubleImageOne>
    <DoubleImageTwo>
      {get(images, '1') && (
        <Image fluid={images[1]} backgroundColor={randomSandalboyzColor()} />
      )}
    </DoubleImageTwo>
  </DoubleWrapper>
);

const FullHeightImageWrapper = styled.div`
  position: relative;
  margin: ${space[7]} ${H_PADDING_MOBILE};
  background-color: ${colors.N100};

  ${mq.gtlg} {
    margin: ${space[9]} ${H_PADDING};
  }
`;

export const FullHeightImage = ({ image }) => (
  <FullHeightImageWrapper>
    {image && <Image fluid={image} backgroundColor={randomSandalboyzColor()} />}
  </FullHeightImageWrapper>
);

const FullWidthImageWrapper = styled.div`
  position: relative;
  margin: ${space[7]} 0;
  padding-bottom: 66.67%;
  background-color: ${colors.N100};

  ${mq.gtlg} {
    margin: ${space[9]} 0;
    padding-bottom: 34%;
  }
`;

export const FullWidthImage = ({ image }) => (
  <FullWidthImageWrapper>
    {image && <AbsoluteImg fluid={image} backgroundColor={randomSandalboyzColor()} />}
  </FullWidthImageWrapper>
);

const OffsetGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    width: 77%;
    margin-left: auto;
    grid-gap: ${H_PADDING};
  }
`;

const OffsetGridImg = styled.div`
  position: relative;
`;

const OffsetGridWrapper = styled.div`
  position: relative;
  margin: ${space[7]} 0;

  ${mq.gtlg} {
    margin: ${space[9]} 0;
  }
`;

export const OffsetGridImage = props => (
  <OffsetGridWrapper>
    <OffsetGridContainer>
      {get(props, 'images', [])
        .slice(0, 4)
        .map((image, idx) => (
          <OffsetGridImg key={idx}>
            {image && <Image fluid={image} backgroundColor={randomSandalboyzColor()} />}
          </OffsetGridImg>
        ))}
    </OffsetGridContainer>
  </OffsetGridWrapper>
);

const splitImage = css`
  position: relative;
  padding-bottom: 122.5%;
  width: 100%;
  background-color: ${colors.N100};

  ${mq.gtlg} {
    height: 580px;
    width: 510px;
    padding-bottom: 0;
  }
`;

const SplitCaption = styled(H400)`
  padding: ${space[5]} ${H_PADDING_MOBILE} ${space[7]};

  ${mq.gtlg} {
    max-width: 510px;
  }
`;

const SplitImageOne = styled.div`
  ${splitImage}
  margin-right: ${space[3]};
`;

const SplitImageTwo = styled.div`
  ${splitImage}
  align-self: flex-end;
`;

const SplitLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SplitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${space[7]} 0;

  ${mq.gtlg} {
    flex-direction: row;
    height: 672px;
    margin: ${space[9]} 0;
  }
`;

export const SplitImage = ({ caption, images }) => (
  <SplitWrapper>
    <SplitLeft>
      <SplitImageOne>
        {get(images, '0') && (
          <AbsoluteImg fluid={images[0]} backgroundColor={randomSandalboyzColor()} />
        )}
      </SplitImageOne>
      {caption && <SplitCaption>{caption}</SplitCaption>}
    </SplitLeft>
    <SplitImageTwo>
      {get(images, '1') && (
        <AbsoluteImg fluid={images[1]} backgroundColor={randomSandalboyzColor()} />
      )}
    </SplitImageTwo>
  </SplitWrapper>
);

const TwoThirdsBackground = styled.div`
  position: absolute;
  top: 0;
  right: ${H_PADDING_MOBILE};
  bottom: 0;
  left: 0;
  background-color: ${colors.N100};

  ${mq.gtlg} {
    width: 77%;
  }
`;

const TwoThirdsWrapper = styled.div`
  position: relative;
  margin: ${space[7]} 0;
  padding-bottom: 150%;

  ${mq.gtlg} {
    margin: ${space[9]} 0;
    padding-bottom: ${0.77 * 66.67}%;
  }
`;

export const TwoThirdsImage = ({ image }) => (
  <TwoThirdsWrapper>
    <TwoThirdsBackground>
      {image && <AbsoluteImg fluid={image} backgroundColor={randomSandalboyzColor()} />}
    </TwoThirdsBackground>
  </TwoThirdsWrapper>
);
