import React, { useState } from 'react';
import styled from 'styled-components';

import { fonts, weights } from '@utils/fonts';

const Ribbon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  background-color: white;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10000;
`;

const SubscribeClick = styled.span`
  text-decoration: underline;
  margin: 0 0.2em;
  cursor: pointer;
`

const TopRibbon = () => {
  const subscribeOnClick = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <Ribbon>
      Labor Day Flash Sale - 24 hours only for 25% off!{' '}
      <SubscribeClick onClick={subscribeOnClick}>
        Subscribe to our newsletter
      </SubscribeClick>{' '}
      to get access.
    </Ribbon>
  );
};

export default TopRibbon;
