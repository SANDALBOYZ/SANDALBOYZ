import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import get from 'lodash/get';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { fadeInEntry } from '@utils/animations';
import { fonts, weights } from '@utils/fonts';
import colors from '@utils/colors';
import space from '@utils/space';
import { mq } from '@utils/styles';

const STICKY_WRAPPER_COLORS = [
  colors.SANDALBOYZ_OLIVE,
  colors.SANDALBOYZ_NATURAL,
  colors.SANDALBOYZ_ROSE,
];

const SectionContainer = styled(motion.section)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: ${space[8]};

  ${mq.gtlg} {
    flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  }
`;

// Just a background piece
const StickyWrapper = styled.div`
  align-self: stretch;
  background-color: ${props => STICKY_WRAPPER_COLORS[(props.index + 1) % 3]};
  margin-bottom: ${space[6]};

  ${mq.gtlg} {
    width: 36%;
    margin-bottom: ${space[10]};
  }
`;

// Includes header and content
const StickySection = styled.div`
  position: sticky;
  top: 80px;
  padding: 30px;
  padding-bottom: 40px;

  ${mq.gtlg} {
    padding: 50px;
  }
`;

const ScrollSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 50px;

  ${mq.gtlg} {
    width: 64%;
  }
`;

const SectionTile = styled.div`
  margin-bottom: 30px;

  ${mq.gtlg} {
    width: calc(50% - 30px);
    &:nth-child(odd) {
      margin-right: 30px;
    }
  }

  & > p {
    margin-bottom: ${space[1]};
  }

  & a {
    text-decoration: underline;
  }
`;

const TileImage = styled(GatsbyImage)`
  margin-bottom: ${space[2]};

  ${mq.gtlg} {
    width: 70%;
  }
`;

const TitleContainer = styled(motion.header)`
  margin-top: ${space[9]};
  margin-bottom: ${space[9]};
  text-align: center;
`;

const H1 = styled.h1`
  font-family: ${fonts.GRANVILLE};
  font-size: 2rem;
  font-weight: ${weights.REGULAR};
  margin-bottom: ${space[5]};
`;

const Description = styled.div`
  padding: 0 ${space[2]};
  margin: 0 auto;

  & > p {
    margin-bottom: ${space[2]};
  }

  ${mq.gtlg} {
    width: 60%;
  }
`;

const H2 = styled.h2`
  font-family: ${fonts.GRANVILLE};
  font-size: 2rem;
  font-weight: ${weights.REGULAR};
  margin-bottom: ${space[5]};
`;

const H3 = styled.h3`
  font-family: ${fonts.GRANVILLE};
  font-size: 2rem;
  font-weight: ${weights.REGULAR};
  margin-bottom: ${space[5]};
`;

const Divider = styled.span`
  &:before {
    content: '';
    width: 5.41667vw;
    margin-right: 2.91667vw;
    height: 3px;
    display: inline-block;
    position: relative;
    background: currentColor;
    vertical-align: middle;
    top: -1px;
    margin-bottom: ${space[4]};
  }
`;

export const About = ({ title, description, sections }) => (
  <>
    <TitleContainer {...fadeInEntry()}>
      <H1>{title}</H1>
      <Description>{documentToReactComponents(description)}</Description>
    </TitleContainer>

    {sections.map((section, index) => {
      const reverse = index % 2 !== 0;

      return (
        <SectionContainer
          key={index}
          reverse={reverse}
          {...fadeInEntry({ delay: 1 })}
        >
          <StickyWrapper index={index}>
            <StickySection>
              <H2>{get(section, 'node.header')}</H2>
              {documentToReactComponents(get(section, 'node.description.json'))}
            </StickySection>
          </StickyWrapper>
          <ScrollSection>
            {section.node.subSections.map((subSection, subSectionIndex) => (
              <SectionTile key={subSectionIndex}>
                <TileImage fluid={subSection.image.fluid} />
                <H3>{subSection.title}</H3>
                <Divider />
                {documentToReactComponents(subSection.description.json)}
              </SectionTile>
            ))}
          </ScrollSection>
        </SectionContainer>
      );
    })}
  </>
);

About.propTypes = {
  title: PropTypes.string.isRequired,
  sections: PropTypes.array,
};

export default About;
