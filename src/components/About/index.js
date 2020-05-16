import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import get from 'lodash/get';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { fadeInEntry } from '@utils/animations';
import colors from '@utils/colors';
import {
  H100 as BaseH100,
  H200 as BaseH200,
  H300 as BaseH300,
} from '@utils/type';
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

const TileImage = styled(Image)`
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

const H100 = styled(BaseH100)`
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

const H200 = styled(BaseH200)`
  margin-bottom: ${space[4]};
`;

const H300 = styled(BaseH300)`
  margin-bottom: ${space[4]};
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
      <H100>{title}</H100>
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
              <H200>{get(section, 'node.header')}</H200>
              {documentToReactComponents(get(section, 'node.description.json'))}
            </StickySection>
          </StickyWrapper>
          <ScrollSection>
            {section.node.subSections.map((subSection, subSectionIndex) => (
              <SectionTile key={subSectionIndex}>
                <TileImage fluid={subSection.image.fluid} />
                <H300>{subSection.title}</H300>
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