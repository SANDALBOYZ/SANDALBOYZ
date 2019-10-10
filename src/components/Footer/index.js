import React from 'react';
import Link from 'gatsby-link';

import { Container } from '@utils/styles';
import { Body, Detail } from '@utils/type';
import Subscribe from '@components/Subscribe';
import links from './links';
import * as styled from './styles';

const Footer = () => (
  <Container>
    <Subscribe />
    <styled.Footer>
      <styled.Info>
        <styled.About>
          <styled.H600>About</styled.H600>
          <Body>
            Hella narwhal Cosby sweater McSweeney's, salvia kitsch before they sold out High Life. Umami tattooed sriracha meggings pickled Marfa Blue Bottle High Life next level four loko PBR. Keytar pickled next level keffiyeh drinking.
          </Body>
        </styled.About>
        <styled.Links>
          {links.map(linkSection => (
            <styled.Section key={linkSection.title}>
              <styled.H600>{linkSection.title}</styled.H600>
              <ul>
                {linkSection.links.map(link => (
                  <li key={link.name}>
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
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
        <Detail>
          © {new Date().getFullYear()}. All rights reserved.
        </Detail>
      </styled.Legal>
    </styled.Footer>
  </Container>
);

export default Footer;
