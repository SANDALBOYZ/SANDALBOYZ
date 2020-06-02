import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Head from '@utils/seo';
import About from '@components/About';
import logo from '@images/logo.jpg';

const ContentfulTest = ({ data }) => {
  console.log(data);

  return (
    <>
      <div>Hi</div>
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
