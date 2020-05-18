import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Head from '@utils/seo';
import About from '@components/About';
import logo from '@images/logo.jpg';



const ContentfulTestPage = ({ data }) => {
  console.log(data);
  const article = data.articles.edges[0].node;

  return (
    <>
      <div>Hi</div>
      <div>
        {get(article, 'author[0]')}
        {documentToReactComponents(get(article, 'body.json'))}
      </div>
    </>
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
