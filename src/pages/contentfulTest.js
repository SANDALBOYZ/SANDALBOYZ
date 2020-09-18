import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import styled from 'styled-components';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { getFluidGatsbyImage } from '@utils/getFluidGatsbyImage';
import Head from '@utils/seo';
import {
  DoubleImage,
  FullHeightImage,
  FullWidthImage,
  OffsetGridImage,
  SplitImage,
} from '@components/StoryImage';

// These `CONTENT TYPE ID` fields match the ones in Contentful.
const ARTICLE_DOUBLE_IMAGE = 'articleDoubleImage';
const ARTICLE_DOUBLE_SPLIT_IMAGE = 'articleDoubleSplitImage';
const ARTICLE_FULL_HEIGHT_IMAGE = 'articleFullHeightImage';
const ARTICLE_OFFSET_GRID_IMAGE = 'articleOffsetGridImage';
const ARTICLE_FULL_WIDTH_IMAGE = 'articleFullWidthImage';

const Container = styled.div`
  margin-top: 100px;
`;

const ContentfulTestPage = ({ data }) => {
  console.log(data);
  const article = data.articles.edges[0].node;

  const storyRendererOptions = {
    renderNode: {
      [INLINES.EMBEDDED_ENTRY]: node => {
        console.log('embedded inline entry');
        console.log(node);
        const contentType =
          node.data.target.sys.contentType.sys['contentful_id'];

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

        return <span>inline entry</span>
      },
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        console.log('embedded block entry');
        console.log(node);
        const contentType =
          node.data.target.sys.contentType.sys['contentful_id'];

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
      [BLOCKS.EMBEDDED_ASSET]: node => {
        console.log('embedded asset!!!!');
        console.log(node);

        return <div>embedded asset like an image</div>;
      },
    },
  };

  return (
    <Container>
      <div>Hi</div>
      <div>
        {get(article, 'author[0]')}
        {documentToReactComponents(
          get(article, 'body.json'),
          storyRendererOptions
        )}
      </div>
    </Container>
  );
};

export default ContentfulTestPage;

export const contentfulTestPageQuery = graphql`
  query ContentfulTestPageQuery {
    articles: allContentfulArticle {
      edges {
        node {
          author
          body {
            json
          }
        }
      }
    }
  }
`;
