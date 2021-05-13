import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import styled from 'styled-components';
import { GatsbyImage, withArtDirection } from 'gatsby-plugin-image';
import Link from 'gatsby-link';

import colors, { randomSandalboyzColor } from '@utils/colors';
import { AbsoluteImg, Breakpoint, breakpoints, mq } from '@utils/styles';
import { fonts, weights } from '@utils/fonts';
import * as styles from './styles';

export const Hero = ({ href, image, label, title }) => (
  <styles.Wrapper>
    <styles.Background>
      {image && (
        <AbsoluteImg fluid={image} backgroundColor={randomSandalboyzColor()} />
      )}
      <Breakpoint min={breakpoints.lg}>
        <styles.Button theme="light" href={href}>
          Read Article
        </styles.Button>
      </Breakpoint>
    </styles.Background>
    <styles.Box>
      {label && <styles.H500>{label}</styles.H500>}
      <styles.H100 isLong={get(title, 'length') > 48}>{title}</styles.H100>
      <Breakpoint max={breakpoints.lg}>
        <styles.Button href={href}>Read Article</styles.Button>
      </Breakpoint>
    </styles.Box>
  </styles.Wrapper>
);

Hero.propTypes = {
  href: PropTypes.string.isRequired,
  image: PropTypes.object,
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
};

const FullHeroWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  margin-bottom: 30px;
  color: ${colors.WINTER_WHITE};
`;

const TextWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  color: ${colors.N0};

  ${mq.gtmd} {
    top: 45%;
  }
`;

const H1 = styled.h1`
  font-family: ${fonts.GRANVILLE};
  font-weight: ${weights.REGULAR};
  font-size: 1.8rem;
  color: ${colors.WINTER_WHITE};
  margin-bottom: 10px;
`;

const Detail = styled.div`
  font-family: ${fonts.NIMBUS};
  font-weight: ${weights.LIGHT};
  font-size: 1.1rem;
  color: ${colors.WINTER_WHITE};
  margin-bottom: 12px;
`;

const CallToAction = styled.div`
  font-family: ${fonts.NIMBUS_CONDENSED};
  font-weight: ${weights.REGULAR};
  color: ${colors.WINTER_WHITE};
  text-transform: uppercase;
  font-size: 0.8rem;

  &:after {
    content: '';
    border-bottom: 1px solid;
    display: block;
    transform: scaleX(0) translateY(4px);
    transition: transform 500ms cubic-bezier(0.645, 0.045, 0.345, 1) 0ms;
    transform-origin: top left;
  }

  &:hover {
    &::after {
      transform: scaleX(1) translateY(4px);
      transition: transform 500ms cubic-bezier(0.645, 0.045, 0.345, 1) 0ms;
      transform-origin: top left;
    }
  }
`;

export const FullHero = ({
  href,
  desktopImage,
  mobileImage,
  label,
  title,
  callToAction,
}) => {
  const images = withArtDirection(desktopImage, [
    {
      media: '(max-width: 916px)',
      image: mobileImage,
    },
  ]);

  return (
    <FullHeroWrapper>
      <GatsbyImage
        image={images}
        backgroundColor={randomSandalboyzColor()}
        style={{
          height: '100%',
        }}
        alt="Hero Image"
      />
      <Link to={href}>
        <TextWrapper>
          <H1>{title}</H1>
          {label && <Detail>{label}</Detail>}
          {callToAction && <CallToAction>{callToAction}</CallToAction>}
        </TextWrapper>
      </Link>
    </FullHeroWrapper>
  );
};

FullHero.propTypes = {
  href: PropTypes.string.isRequired,
  desktopImage: PropTypes.object.isRequired,
  mobileImage: PropTypes.object.isRequired,
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  callToAction: PropTypes.string.isRequired,
};

export default Hero;
