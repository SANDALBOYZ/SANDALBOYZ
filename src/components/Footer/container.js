import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import get from 'lodash/get';

import Footer from '.';

export default () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        about: allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "about" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                about
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Footer about={get(data, 'about.edges[0].node.frontmatter.about')} />
      );
    }}
  />
);
