import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Head from '@utils/seo';
import { NarrowTextContainer } from '@utils/styles';
import Header from '@components/Header';

const PrivacyPage = ({ data }) => (
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
  query PrivacyPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "privacy" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

export default PrivacyPage;
