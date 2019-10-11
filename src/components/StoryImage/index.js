import React from 'react';
import styled, { css } from 'styled-components';

import colors from '@utils/colors';
import space from '@utils/space';
import { H400 } from '@utils/type';

export const FullWidthImage = styled.div`
  padding-bottom: 34%;
  background-color: ${colors.N100};
  background-image: ${props => `url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const splitImage = css`
  height: 580px;
  width: 510px;
  background-color: ${colors.N100};
  background-image: ${props => `url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const SplitCaption = styled(H400)`
  max-width: 510px;
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
  justify-content: center;
  height: 672px;
`;

export const SplitImage = ({ caption, firstImage, secondImage }) => (
  <SplitWrapper>
    <SplitLeft>
      <SplitImageOne image={firstImage} />
      {caption && (
        <SplitCaption>{caption}</SplitCaption>
      )}
    </SplitLeft>
    <SplitImageTwo image={secondImage} />
  </SplitWrapper>
);

const TwoThirdsBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 77%;
  background-color: ${colors.N100};
  background-image: ${props => `url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const TwoThirdsWrapper = styled.div`
  position: relative;
  padding-bottom: ${.77 * 66.67}%;
`;

export const TwoThirdsImage = ({ image }) => (
  <TwoThirdsWrapper>
    <TwoThirdsBackground image={image} />
  </TwoThirdsWrapper>
);
