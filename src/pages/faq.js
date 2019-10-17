import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';

import Head from '@utils/seo';
import FAQ from '@components/FAQ';
import Header from '@components/Header';

const FaqPage = ({ data }) => (
  <>
    <Head title={get(data, 'markdownRemark.frontmatter.title')} />
    <Header
      shrinkOnMobile
      title={get(data, 'markdownRemark.frontmatter.title')}
    />
    <FAQ questions={get(data, 'markdownRemark.frontmatter.questions')} />
  </>
);

export const pageQuery = graphql`
  query FaqPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "faq" } }) {
      frontmatter {
        title
        questions {
          question
          answer
        }
      }
    }
  }
`;

export default FaqPage;
