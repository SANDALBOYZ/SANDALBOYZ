import React, { Component } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Head from '@utils/seo';
import { AbsoluteImg } from '@utils/styles';
import { H100, H200 } from '@utils/type';
import { FullWidthImage, SplitImage, TwoThirdsImage } from '@components/StoryImage';
import * as styled from './styles';

export const StoryTemplate = ({ story }) => {
  const renderSection = (section, idx) => {
    if (section.type === 'image') {
      const { caption, imageType } = section;
      const images = get(section, 'images', []).map(image => get(image, 'childImageSharp.fluid'));

      switch (imageType) {
        case 'fullWidth':
          return <FullWidthImage image={images[0]} />;
        case 'split':
          return <SplitImage caption={caption} images={images} />;
        case 'twoThirds':
          return <TwoThirdsImage image={images[0]} />;

        default: // no default
      }
    }

    return <div key={idx} dangerouslySetInnerHTML={{ __html: section.html }} />;
  };

  return (
    <>
      <styled.Hero>
        <styled.Background>
          <AbsoluteImg fluid={get(story, 'frontmatter.hero.childImageSharp.fluid')} />
        </styled.Background>
        <styled.Box>
          <H100>{get(story, 'frontmatter.title')}</H100>
        </styled.Box>
        {get(story, 'frontmatter.authors.length') && (
          <styled.Authors>
            {story.frontmatter.authors.map(author => (
              <styled.ContentLabel key={author}>{author}</styled.ContentLabel>
            ))}
          </styled.Authors>
        )}
      </styled.Hero>
      {get(story, 'frontmatter.lede') && (
        <styled.Lede>
          <H200>{story.frontmatter.lede}</H200>
        </styled.Lede>
      )}
      <styled.Sections>
        {get(story, 'fields.sections', []).map(renderSection)}
      </styled.Sections>
    </>
  );
};

class Story extends Component {
  render() {
    const { data } = this.props;

    return (
      <>
        <Head
          title={get(data, 'story.frontmatter.title')}
          description={get(data, 'story.frontmatter.lede')}
          ogType="article"
          meta={[
            {
              property: 'og:image',
              content: get(data, 'story.frontmatter.hero.childImageSharp.fluid.src'),
            },
          ]}
          slug={get(data, 'story.slug')}
        />
        <StoryTemplate story={data.story} />
      </>
    );
  }
}

export default Story;

export const pageQuery = graphql`
  query StoryById($id: String!) {
    story: markdownRemark(id: { eq: $id }) {
      id
      fields {
        sections {
          caption
          html
          imageType
          images {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          type
        }
        slug
      }
      frontmatter {
        authors
        hero {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        lede
        title
      }
    }
  }
`;
