import React from 'react';
import styled, { css } from 'styled-components';

import colors from '@utils/colors';
import space, { H_PADDING_MOBILE } from '@utils/space';
import { AbsoluteImg, mq } from '@utils/styles';
import { H400 } from '@utils/type';

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
    {image && (
      <AbsoluteImg fluid={image} />
    )}
  </FullWidthImageWrapper>
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
        {images[0] && (
          <AbsoluteImg fluid={images[0]} />
        )}
      </SplitImageOne>
      {caption && <SplitCaption>{caption}</SplitCaption>}
    </SplitLeft>
    <SplitImageTwo>
      {images[1] && (
        <AbsoluteImg fluid={images[1]} />
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
      {image && (
        <AbsoluteImg fluid={image} />
      )}
    </TwoThirdsBackground>
  </TwoThirdsWrapper>
);
