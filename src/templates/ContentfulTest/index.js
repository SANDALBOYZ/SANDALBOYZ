import React, { Component } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import shareImage from '@images/shareImage.jpg';
import Head from '@utils/seo';
import { AbsoluteImg } from '@utils/styles';
import { H100, H200 } from '@utils/type';
import { getFluidGatsbyImage } from '@utils/getFluidGatsbyImage';
import {
  DoubleImage,
  FullHeightImage,
  FullWidthImage,
  OffsetGridImage,
  SplitImage,
  TwoThirdsImage,
} from '@components/StoryImage';
import * as styled from './styles';

// These `CONTENT TYPE ID` fields match the ones in Contentful.
const ARTICLE_DOUBLE_IMAGE = 'articleDoubleImage';
const ARTICLE_DOUBLE_SPLIT_IMAGE = 'articleDoubleSplitImage';
const ARTICLE_FULL_HEIGHT_IMAGE = 'articleFullHeightImage';
const ARTICLE_OFFSET_GRID_IMAGE = 'articleOffsetGridImage';
const ARTICLE_FULL_WIDTH_IMAGE = 'articleFullWidthImage';

const storyRendererOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: node => {
      console.log('embedded block entry');
      console.log(node);
      const contentType = node.data.target.sys.contentType.sys['contentful_id'];

      const gatsbyFluidImages = get(
        node,
        "data.target.fields.images['en-US']",
        []
      ).map(image => {
        const imageFile = {
          file: image.fields.file['en-US'],
        };

        return getFluidGatsbyImage(imageFile, { maxWidth: 1080 });
      });

      switch (contentType) {
        case ARTICLE_DOUBLE_IMAGE:
          return <DoubleImage images={gatsbyFluidImages} />;
        case ARTICLE_DOUBLE_SPLIT_IMAGE:
          return <SplitImage images={gatsbyFluidImages} />;
        case ARTICLE_FULL_HEIGHT_IMAGE:
          return <FullHeightImage image={gatsbyFluidImages[0]} />;
        case ARTICLE_OFFSET_GRID_IMAGE:
          return <OffsetGridImage images={gatsbyFluidImages} />;
        case ARTICLE_FULL_WIDTH_IMAGE:
          return <FullWidthImage image={gatsbyFluidImages[0]} />;
        default:
          return <div />;
      }
    },
  },
};

export const StoryTemplate = ({ data }) => {
  const story = {};

  console.log(data);
  const article = data.articles.edges[0].node;

  return (
    <>
      <styled.Hero>
        <styled.Background>
          <AbsoluteImg
            fluid={get(story, 'frontmatter.hero.childImageSharp.fluid')}
          />
        </styled.Background>
        <styled.Box>
          <H100>{get(story, 'frontmatter.title')}</H100>
        </styled.Box>
        {get(story, 'frontmatter.authors.length') > 0 && (
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
        {documentToReactComponents(
          get(article, 'body.json'),
          storyRendererOptions
        )}
      </styled.Sections>
    </>
  );
};

class Story extends Component {
  render() {
    const { data } = this.props;

    // https://developers.google.com/search/docs/data-types/article
    const schemaOrg = {
      author: {
        '@type': 'Person',
        name: get(data, 'story.frontmatter.authors[0]'),
      },
      image: get(data, 'story.frontmatter.hero.childImageSharp.fluid.src'),
      datePublished: get(data, 'story.frontmatter.date'),
      headline:
        get(data, 'story.frontmatter.lede') ||
        get(data, 'story.frontmatter.title'),
      publisher: {
        '@type': 'Organization',
        name: 'SANDALBOYZ',
        logo: {
          '@type': 'ImageObject',
          // @TODO: Make this `siteUrl` dynamic. No hardcode!
          url: `https://sandalboyz.com${shareImage}`,
        },
      },
    };

    return (
      <>
        <Head
          title={get(data, 'story.frontmatter.title')}
          description={get(data, 'story.frontmatter.lede')}
          schemaType="Article" // https://schema.org/Article
          ogType="article" // https://ogp.me/#type_article
          image={get(data, 'story.frontmatter.hero.childImageSharp.fluid.src')}
          slug={get(data, 'story.fields.slug')}
          additionalSchemaOrg={schemaOrg}
        />
        <StoryTemplate story={data.story} />
      </>
    );
  }
}

export default Story;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      author
      body {
        json
      }
    }
  }
`;
