import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import colors from '@utils/colors';
import space, { H_PADDING_MOBILE } from '@utils/space';
import { H300, H500 } from '@utils/type';
import Navigation from '@components/Navigation';

const Footer = styled.div`
  display: flex;
  align-items: space-between;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  height: 48px;
  padding: 0 ${H_PADDING_MOBILE};

  & > a {
    color: ${colors.N0};
  }
`;

const Links = styled.div`
  text-align: center;

  & > a {
    display: block;
    color: ${colors.N0};
  }

  & > a:not(:last-child) {
    margin-bottom: ${space[5]};
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  color: ${colors.N0};
  background-color: ${colors.N700};
  opacity: ${props => (props.open ? 1 : 0)};
  pointer-events: ${props => (props.open ? 'auto' : 'none')};
  transition: opacity 150ms linear;
`;

const MobileMenu = ({ onMenuClose, open }) => (
  <Wrapper open={open}>
    <Navigation light menuOpen={open} onMenuClose={onMenuClose} />
    <Links>
      <Link to="/products" onClick={onMenuClose}>
        <H300>Products</H300>
      </Link>
      <Link to="/stories" onClick={onMenuClose}>
        <H300>Stories</H300>
      </Link>
      <Link to="/search" onClick={onMenuClose}>
        <H300>Search</H300>
      </Link>
      <Link to="/contact" onClick={onMenuClose}>
        <H300>Contact</H300>
      </Link>
    </Links>
    <Footer>
      <Link to="/login" onClick={onMenuClose}>
        <H500>Login</H500>
      </Link>
    </Footer>
  </Wrapper>
);

MobileMenu.propTypes = {
  onMenuClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MobileMenu;
