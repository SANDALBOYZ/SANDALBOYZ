import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import get from 'lodash/get';

import Head from '@utils/seo';
import Header from '@components/Header';
import Search from '@components/Search';

const IndexPage = () => (
  <>
    <Head title="Search" keywords={['gatsby', 'application', 'react']} />
    <Header shrinkOnMobile title="Search Products" />
    <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          siteSearchIndex {
            index
          }
          allShopifyProduct(sort: { fields: [title], order: DESC }) {
            edges {
              node {
                id
                description
                title
                handle
                createdAt
                images {
                  id
                  originalSrc
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 910) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
                variants {
                  price
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Search
          index={get(data, 'siteSearchIndex.index')}
          products={get(data, 'allShopifyProduct.edges', []).map(
            ({ node }) => node
          )}
        />
      )}
    />
  </>
);

export default IndexPage;
