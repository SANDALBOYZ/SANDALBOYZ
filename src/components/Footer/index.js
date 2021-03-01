import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { Container as BaseContainer, mq } from '@utils/styles';
import { Body, Detail } from '@utils/type';
import Subscribe from '@components/Subscribe';
import colors from '@utils/colors';
import space from '@utils/space';
import { weights } from '@utils/fonts';

import BaseLogo from '@components/Logo';
import Icon from '@components/Icon';

const Container = styled(BaseContainer)`
  background-color: ${colors.EMPIRE_YELLOW};
  border-top: 1px solid #333;
`;

const About = styled.div`
  ${mq.gtlg} {
    max-width: ${space[13]};
    margin-right: ${space[8]};
  }
`;

const SocialContainer = styled.div`
  margin-top: 10px;
`;

const StyledIcon = styled(Icon)`
  height: 21px;
  width: 21px;
  margin-right: 8px;
`;

const FooterWrapper = styled.footer`
  padding-top: ${space[4]};
  padding-bottom: ${space[4]};

  ${mq.gtlg} {
    padding-bottom: ${space[7]};
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${space[6]} 0;

  ${mq.gtlg} {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: ${space[7]} 0;
  }
`;

const Legal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Links = styled.div`
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

const Logo = styled(BaseLogo)`
  height: 12px;

  ${mq.gtlg} {
    height: 20px;
  }
`;

const Section = styled.div`
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
            <SocialContainer>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/sandalboyz"
                aria-label="SANDALBOYZ Instagram"
              >
                <StyledIcon name="instagram" />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.twitter.com/sandalboyz"
                aria-label="SANDALBOYZ Twitter"
              >
                <StyledIcon name="twitter" />
              </a>
            </SocialContainer>
          </About>
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
