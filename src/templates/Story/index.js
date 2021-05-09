import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { parseISO, format } from 'date-fns';

import shareImage from '@images/shareImage.jpg';
import Head from '@utils/seo';
import { AbsoluteImg } from '@utils/styles';
import {
  DoubleImage,
  FullHeightImage,
  FullWidthImage,
  OffsetGridImage,
  SplitImage,
} from '@components/StoryImage';
import * as styled from './styles';

// These `CONTENT TYPE ID` fields match the ones in Contentful.
const ARTICLE_DOUBLE_IMAGE = 'ContentfulArticleDoubleImage';
const ARTICLE_DOUBLE_SPLIT_IMAGE = 'ContentfulArticleDoubleSplitImage';
const ARTICLE_FULL_HEIGHT_IMAGE = 'ContentfulArticleFullHeightImage';
const ARTICLE_OFFSET_GRID_IMAGE = 'ContentfulArticleOffsetGridImage';
const ARTICLE_FULL_WIDTH_IMAGE = 'ContentfulArticleFullWidthStretchImage';

const storyRendererOptions = (references) => {
  console.log('references');
  console.log(references);
  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        const contentfulId =
          node.data.target.sys.id;

        const reference = references.find(
          ref => (ref.contentful_id === contentfulId)
        );

        const contentType = reference.internal.type;
        const images = reference.images;

        switch (contentType) {
          case ARTICLE_DOUBLE_IMAGE:
            return <DoubleImage images={images} />;
          case ARTICLE_DOUBLE_SPLIT_IMAGE:
            return <SplitImage images={images} />;
          case ARTICLE_FULL_HEIGHT_IMAGE:
            return <FullHeightImage image={images[0]} />;
          case ARTICLE_OFFSET_GRID_IMAGE:
            return <OffsetGridImage images={images} />;
          case ARTICLE_FULL_WIDTH_IMAGE:
            return <FullWidthImage image={images[0]} />;
          default:
            return <div />;
        }
      },
    },
  };
};

const StoryTemplate = ({ data }) => {
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
          <AbsoluteImg image={article.heroImage.gatsbyImageData} />
        </styled.Background>
        <styled.Box>
          <styled.H1>{article.title}</styled.H1>
          <styled.DateLabel>
            {format(parseISO(article.publishDate), 'MMMM d, yyyy')}
          </styled.DateLabel>
        </styled.Box>
        <styled.Authors>
          <styled.AuthorBox>
            <styled.ContentLabel>Words</styled.ContentLabel>
            {article.author.map(a => (
              <styled.AuthorLabel key={a}>{a}</styled.AuthorLabel>
            ))}
          </styled.AuthorBox>
          <styled.AuthorBox>
            <styled.ContentLabel>Photos</styled.ContentLabel>
            {article.photographer.map(p => (
              <styled.AuthorLabel key={p}>{p}</styled.AuthorLabel>
            ))}
          </styled.AuthorBox>
        </styled.Authors>
      </styled.Hero>
      <styled.Lede>{get(article, 'previewText.previewText')}</styled.Lede>
      <styled.Sections>
        {documentToReactComponents(
          JSON.parse(get(article, 'body.raw')),
          storyRendererOptions(get(article, 'body.references'))
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
        raw
        references {
          ... on ContentfulArticleDoubleImage {
            contentful_id
            id
            internal {
              type
            }
            images {
              gatsbyImageData
            }
          }
          ... on ContentfulArticleDoubleSplitImage {
            contentful_id
            id
            internal {
              type
            }
            images {
              gatsbyImageData
            }
          }
          ... on ContentfulArticleFullHeightImage {
            contentful_id
            id
            internal {
              type
            }
            images {
              gatsbyImageData
            }
          }
          ... on ContentfulArticleFullWidthStretchImage {
            contentful_id
            id
            internal {
              type
            }
            images {
              gatsbyImageData
            }
          }
          ... on ContentfulArticleOffsetGridImage {
            contentful_id
            id
            internal {
              type
            }
            images {
              gatsbyImageData
            }
          }
        }
      }
      heroImage {
        gatsbyImageData
        fluid {
          src
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
