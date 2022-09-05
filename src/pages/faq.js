import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import remark from 'remark';
import html from 'remark-html';

import Head from '@utils/seo';
import FAQ from '@components/FAQ';
import Header from '@components/Header';

const FaqPage = ({ data }) => {
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: get(data, 'markdownRemark.frontmatter.questions', []).map(
      (faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: remark().use(html).processSync(faq.answer).toString(),
        },
      }),
    ),
  };

  return (
    <>
      <Head
        title={get(data, 'markdownRemark.frontmatter.title')}
        additionalSchemaOrg={schemaOrg}
        slug="/faq"
      />
      <Header
        shrinkOnMobile
        title={get(data, 'markdownRemark.frontmatter.title')}
      />
      <FAQ questions={get(data, 'markdownRemark.frontmatter.questions')} />
    </>
  );
};

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
