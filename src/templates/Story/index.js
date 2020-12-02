import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { parseISO, format } from 'date-fns';

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
} from '@components/StoryImage';
import * as styled from './styles';

// These `CONTENT TYPE ID` fields match the ones in Contentful.
const ARTICLE_DOUBLE_IMAGE = 'articleDoubleImage';
const ARTICLE_DOUBLE_SPLIT_IMAGE = 'articleDoubleSplitImage';
const ARTICLE_FULL_HEIGHT_IMAGE = 'articleFullHeightImage';
const ARTICLE_OFFSET_GRID_IMAGE = 'articleOffsetGridImage';
const ARTICLE_FULL_WIDTH_IMAGE = 'articleFullWidthStretchImage';

const storyRendererOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: node => {
      const contentType = node.data.target.sys.contentType.sys['contentful_id'];

      const gatsbyFluidImages = get(
        node,
        'data.target.fields.images[\'en-US\']',
        []
      ).map(image => {
        const imageFile = {
          file: image.fields.file['en-US'],
        };

        return getFluidGatsbyImage(imageFile, { maxWidth: 1200 });
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
  const article = data.contentfulArticle;

  const schemaOrg = {
    author: {
      '@type': 'Person',
      name: article.author[0],
    },
    image: article.heroImage.fluid.src,
    datePublished: article.publishDate,
    headline: get(article, 'previewText.previewText') || article.title,
    publisher: {
      '@type': 'Organization',
      name: 'SANDALBOYZ',
      logo: {
        '@type': 'ImageObject',
        url: `https://sandalboyz.com${shareImage}`,
      },
    },
  };

  return (
    <>
      <Head
        title={article.title}
        description={get(article, 'previewText.previewText')}
        schemaType="Article" // https://schema.org/Article
        ogType="article" // https://ogp.me/#type_article
        image={article.heroImage.fluid.src}
        slug={article.slug}
        additionalSchemaOrg={schemaOrg}
      />
      <styled.Hero>
        <styled.Background>
          <AbsoluteImg fluid={article.heroImage.fluid} />
        </styled.Background>
        <styled.Box>
          <H100>{article.title}</H100>
        </styled.Box>
        <styled.Authors>
          <styled.DateLabel>
            {format(parseISO(article.publishDate), 'LLL d, yyyy')}
          </styled.DateLabel>
          <styled.AuthorBox>
            <styled.ContentLabel>Words</styled.ContentLabel>
            {article.author.map(auth => (
              <styled.ContentLabel key={auth}>{auth}</styled.ContentLabel>
            ))}
          </styled.AuthorBox>
          <styled.AuthorBox>
            <styled.ContentLabel>Photos</styled.ContentLabel>
            {article.photographer.map(photog => (
              <styled.ContentLabel key={photog}>{photog}</styled.ContentLabel>
            ))}
          </styled.AuthorBox>
        </styled.Authors>
      </styled.Hero>
      <styled.Lede>
        <H200>{get(article, 'previewText.previewText')}</H200>
      </styled.Lede>
      <styled.Sections>
        {documentToReactComponents(
          get(article, 'body.json'),
          storyRendererOptions
        )}
      </styled.Sections>
    </>
  );
};

export default StoryTemplate;

export const query = graphql`
  query StoryTemplateQuery($slug: String) {
    contentfulArticle(slug: { eq: $slug }) {
      slug
      createdAt
      publishDate
      title
      author
      photographer
      body {
        json
      }
      heroImage {
        fluid {
          aspectRatio
          sizes
          src
          srcSet
        }
      }
      previewText {
        previewText
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
    }
  }
`;
