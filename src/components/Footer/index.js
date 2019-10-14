import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { graphql, StaticQuery } from 'gatsby';
import get from 'lodash/get';

import { Container } from '@utils/styles';
import { Body, Detail } from '@utils/type';
import Subscribe from '@components/Subscribe';
import links from './links';
import * as styled from './styles';

export const Footer = ({ about }) => {
  return (
    <Container>
      <Subscribe />
      <styled.Footer>
        <styled.Info>
          <styled.About>
            <styled.H600>About</styled.H600>
            <Body>{about}</Body>
          </styled.About>
          <styled.Links>
            {links.map(linkSection => (
              <styled.Section key={linkSection.title}>
                <styled.H600>{linkSection.title}</styled.H600>
                <ul>
                  {linkSection.links.map(link => (
                    <li key={link.name}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Body>{link.name}</Body>
                        </a>
                      ) : (
                        <Link to={link.href}>
                          <Body>{link.name}</Body>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </styled.Section>
            ))}
          </styled.Links>
        </styled.Info>
        <styled.Legal>
          <styled.Logo />
          <Detail>© {new Date().getFullYear()}. All rights reserved.</Detail>
        </styled.Legal>
      </styled.Footer>
    </Container>
  );
};

Footer.propTypes = {
  about: PropTypes.string,
};

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
