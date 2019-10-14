import React, { Component } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Head from '@utils/seo';
import { H100, H200 } from '@utils/type';
import { FullWidthImage, SplitImage, TwoThirdsImage } from '@components/StoryImage';
import * as styled from './styles';

class Story extends Component {
  renderSection = (section) => {
    if (section.type === 'image') {
      const { caption, imageType } = section;
      const images = get(section, 'images', []).map(image => get(image, 'childImageSharp.fluid.src'));

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

    return <div dangerouslySetInnerHTML={{ __html: section.html }} />;
  };

  render() {
    const { data } = this.props;

    return (
      <>
        <Head title="Story" />
        <styled.Hero>
          <styled.Background
            image={get(data, 'story.frontmatter.hero.childImageSharp.fluid.src')}
          />
          <styled.Box>
            <H100>{get(data, 'story.frontmatter.title')}</H100>
          </styled.Box>
          {get(data, 'story.frontmatter.authors.length') && (
            <styled.Authors>
              {data.story.frontmatter.authors.map(author => (
                <styled.ContentLabel key={author}>{author}</styled.ContentLabel>
              ))}
            </styled.Authors>
          )}
        </styled.Hero>
        {get(data, 'story.frontmatter.lede') && (
          <styled.Lede>
            <H200>{data.story.frontmatter.lede}</H200>
          </styled.Lede>
        )}
        <styled.Sections>
          {get(data, 'story.fields.sections', []).map(this.renderSection)}
        </styled.Sections>
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
