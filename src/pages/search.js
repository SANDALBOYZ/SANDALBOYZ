import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import get from 'lodash/get';

import Head from '@utils/seo';
import Search from '@components/Search';

const SearchPage = ({ location }) => (
  <>
    <Head title="Search" />
    <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          siteSearchIndex {
            index
          }
          allShopifyProduct(sort: { title: DESC }) {
            edges {
              node {
                id
                description
                title
                handle
                createdAt
                variants {
                  price
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <Search
          index={get(data, 'siteSearchIndex.index')}
          location={location}
          products={get(data, 'allShopifyProduct.edges', []).map(
            ({ node }) => node
          )}
        />
      )}
    />
  </>
);

export default SearchPage;
