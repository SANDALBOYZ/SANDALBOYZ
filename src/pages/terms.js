import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Head from '@utils/seo';
import { NarrowTextContainer } from '@utils/styles';
import Header from '@components/Header';

const TermsPage = ({ data }) => (
  <>
    <Head title={get(data, 'markdownRemark.frontmatter.title')} />
    <Header
      shrinkOnMobile
      title={get(data, 'markdownRemark.frontmatter.title')}
    />
    <NarrowTextContainer
      dangerouslySetInnerHTML={{ __html: get(data, 'markdownRemark.html') }}
    />
  </>
);

export const pageQuery = graphql`
  query TermsPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "terms" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

export default TermsPage;
