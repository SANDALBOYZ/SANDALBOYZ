import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { format } from 'date-fns';
import styled from 'styled-components';

import { AbsoluteImg } from '@utils/styles';
import { fonts, weights } from '@utils/fonts';
import colors from '@utils/colors';
import space, { H_PADDING, V_PADDING, H_PADDING_MOBILE } from '@utils/space';
import { Container as BaseContainer, mq } from '@utils/styles';

export const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 100%;
  background-color: ${colors.N100};
  overflow: hidden;

  & > div {
    transform: scale(1);
    transition: transform 800ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  & img {
    backface-visibility: hidden;
    transform: translateZ(0);
  }
`;

export const Info = styled.div`
  padding: ${space[3]} ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    padding: ${space[2]} 0 ${space[5]};
  }
`;

export const Inner = styled.div`
  & > :first-child {
    margin-bottom: ${space[2]};
  }

  ${mq.gtlg} {
    display: flex;

    & > :first-child {
      margin-right: ${space[5]};
      margin-bottom: 0;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  &:hover ${ImageWrapper} > div {
    transform: scale(1.05);
  }

  & h3 {
    transition: all 800ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  &:hover h3 {
    color: ${colors.N600};
    transform: skewX(-5deg);
  }
`;

export const Container = styled(BaseContainer)`
  background-color: ${colors.WINTER_WHITE};
  margin-bottom: ${space[8]};
  padding: ${space[4]} 0;

  ${mq.gtmd} {
    padding: ${space[4]} ${H_PADDING_MOBILE};
  }

  ${mq.gtlg} {
    padding: ${space[4]} ${H_PADDING};
  }
`;

export const Header = styled.div`
  padding: 0 ${H_PADDING_MOBILE} ${space[2]};
  margin-bottom: ${space[3]};

  ${mq.gtmd} {
    padding: 0;
    margin-bottom: ${space[5]};
  }
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  font-family: ${fonts.GRANVILLE};
  font-weight: ${weights.REGULAR};
`;

const Description = styled.p`
  font-family: ${fonts.NIMBUS};
  font-size: 0.8rem;
  font-weight: ${weights.LIGHT};
  line-height: 1.1rem;
  width: 80%;
  margin-bottom: 10px;
`;

export const H3 = styled.h3`
  font-size: 1.1rem;
  font-family: ${fonts.GRANVILLE};
  font-weight: ${weights.LIGHT};
`;

const RecentStories = ({ storyA, storyB }) => (
  <Container>
    <Header>
      <H2>Recent Stories</H2>
      <Description>
        Catch up on our latest stories and features or enjoy some lookbook
        editorials with that cup of coffee.
      </Description>
    </Header>
    <Inner>
      <Wrapper>
        <Link to={storyA.href}>
          <ImageWrapper>
            {storyA.image && <AbsoluteImg fluid={storyA.image} />}
          </ImageWrapper>
          <Info>
            <H3>{storyA.title}</H3>
            <p>{storyA.previewText}</p>
            <span>{format(new Date(storyA.date), 'LLL yyyy')}</span>
          </Info>
        </Link>
      </Wrapper>
      <Wrapper>
        <Link to={storyB.href}>
          <ImageWrapper>
            {storyB.image && <AbsoluteImg fluid={storyB.image} />}
          </ImageWrapper>
          <Info>
            <H3>{storyB.title}</H3>
            <p>{storyB.previewText}</p>
            <span>{format(new Date(storyB.date), 'LLL yyyy')}</span>
          </Info>
        </Link>
      </Wrapper>
    </Inner>
  </Container>
);

RecentStories.propTypes = {
  storyA: PropTypes.shape({
    href: PropTypes.string.isRequired,
    image: PropTypes.object,
    title: PropTypes.string.isRequired,
  }).isRequired,
  storyB: PropTypes.shape({
    href: PropTypes.string.isRequired,
    image: PropTypes.object,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecentStories;
