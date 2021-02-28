import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { Container as BaseContainer, mq } from '@utils/styles';
import { Body, Detail } from '@utils/type';
import Subscribe from '@components/Subscribe';
import colors from '@utils/colors';
import space from '@utils/space';
import { H600 as BaseH600 } from '@utils/type';
import { fonts, weights } from '@utils/fonts';

import BaseLogo from '@components/Logo';

export const Container = styled(BaseContainer)`
  background-color: ${colors.EMPIRE_YELLOW};
`;

export const About = styled.div`
  ${mq.gtlg} {
    max-width: ${space[13]};
    margin-right: ${space[8]};
  }
`;

export const FooterWrapper = styled.footer`
  padding-top: ${space[4]};
  padding-bottom: ${space[4]};

  ${mq.gtlg} {
    padding-bottom: ${space[7]};
  }
`;

export const H600 = styled(BaseH600)`
  margin-bottom: ${space[3]};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${space[6]} 0;

  ${mq.gtlg} {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: ${space[7]} 0;
  }
`;

export const Legal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Links = styled.div`
  font-weight: ${weights.REGULAR};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;

  ${mq.gtmd} {
    flex-direction: column;
    text-align: right;
  }
`;

export const Logo = styled(BaseLogo)`
  height: 12px;

  ${mq.gtlg} {
    height: 20px;
  }
`;

export const Section = styled.div`
  width: 50%;
  margin-bottom: ${space[6]};

  & p {
    line-height: 40px;
  }

  ${mq.gtlg} {
    & p {
      line-height: 28px;
    }

    &:not(:last-child) {
      margin-right: ${space[8]};
    }
  }
`;

const links = [
  { name: 'FAQ', href: '/faq' },
  { name: 'Returns', href: '/returns' },
  { name: 'Terms', href: '/terms' },
  { name: 'Privacy', href: '/privacy' },
];

const Footer = ({ about, showStories }) => {
  return (
    <Container>
      <FooterWrapper>
        <Subscribe />
        <Info>
          <Links>
            {links.map(link => (
              <Link key={link.name} to={link.href}>
                {link.name}
              </Link>
            ))}
          </Links>
          <About>
            <Body>{about}</Body>
          </About>
          {/* <Links>
            {links.map(linkSection => (
              <Section key={linkSection.title}>
                <H600>{linkSection.title}</H600>
                <ul>
                  {linkSection.links.map(link => {
                    return (
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
                    );
                  })}
                </ul>
              </Section>
            ))}
          </Links> */}
        </Info>
        <Legal>
          <Logo />
          <Detail>© {new Date().getFullYear()}. All rights reserved.</Detail>
        </Legal>
      </FooterWrapper>
    </Container>
  );
};

Footer.propTypes = {
  about: PropTypes.string,
};

export default Footer;
