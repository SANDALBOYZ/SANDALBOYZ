import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Head from '@utils/seo';
import About from '@components/About';
import logo from '@images/logo.jpg';

const ContentfulTest = ({ data }) => {
  console.log(data);
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        console.log(node);

        return <div>Embedded Asset</div>;
      },
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        console.log(node);
        console.log(node.data.target.sys.contentType.sys.id);

        return <div>Embedded Entry</div>;
      },
      [INLINES.EMBEDDED_ENTRY]: node => {
        console.log(node);
        console.log(node.data.target.sys.contentType.sys.id);

        return <div>Embedded Entry Inline</div>;
      },
    },
  };

  return (
    <>
      <div>Hi</div>
      {documentToReactComponents(
        get(data, 'contentfulArticle.body.json'),
        options
      )}
    </>
  );
};

export default ContentfulTest;

export const contentfulTestPageQuery = graphql`
  query($slug: String!, $assetContentfulIds: [String!]!) {
    contentfulArticle(slug: { eq: $slug }) {
      body {
        json
      }
    }
    allContentfulAsset(filter: { contentful_id: { in: $assetContentfulIds } }) {
      edges {
        node {
          contentful_id
          fluid(quality: 80) {
            srcSet
            src
            sizes
            aspectRatio
          }
        }
      }
    }
  }
`;
