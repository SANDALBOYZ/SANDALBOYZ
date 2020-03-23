import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import styled from 'styled-components';
import Image from 'gatsby-image';
import Link from 'gatsby-link';

import colors, { randomSandalboyzColor } from '@utils/colors';
import { AbsoluteImg, Breakpoint, breakpoints } from '@utils/styles';
import { H100 as BaseH100, H500 as BaseH500 } from '@utils/type';
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
`;

const TextWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  color: ${colors.N0};
`;

const FullHeroH100 = styled(BaseH100)`
  margin-bottom: 15px;
`;

const CallToAction = styled.div`
  color: ${colors.N0};

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
  const sources = [
    {
      ...mobileImage,
      media: '(max-width: 916px)',
    },
    {
      ...desktopImage,
      media: '(min-width: 916px)',
    },
  ];

  return (
    <FullHeroWrapper>
      <Image fluid={sources} backgroundColor={randomSandalboyzColor()} />
      <Link to={href}>
        <TextWrapper>
          {label && <BaseH500>{label}</BaseH500>}
          <FullHeroH100>{title}</FullHeroH100>
          <CallToAction>{callToAction}</CallToAction>
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
