import React, { useState, useEffect } from 'react';
import { StyleSheetManager } from 'styled-components';

import { GlobalStyle } from '@utils/styles';

const StylesheetInjector = ({ children }) => {
  const [iframeRef, setIframeRef] = useState(undefined);

  useEffect(() => {
    const iframe = document.querySelector('#nc-root iframe');
    const iframeHeadElem = iframe && iframe.contentDocument.head;
    setIframeRef(iframeHeadElem);
  }, []);

  return (
    <>
      {iframeRef && (
          <StyleSheetManager target={iframeRef}>
            <>
              <GlobalStyle />
              {children}
            </>
          </StyleSheetManager>
      )}
    </>
  );
};

export default StylesheetInjector;
