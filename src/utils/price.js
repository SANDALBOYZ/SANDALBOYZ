import React from 'react';
import styled from 'styled-components';

const OriginalPrice = styled.span`
  text-decoration: line-through;
`;

const PercentOff = styled.span`
  color: #f22e2e;
`;

export default (price, compareAtPrice = null, currencyCode = 'USD') => {
  // const formattedPrice = Intl.NumberFormat('en-US', {
  //   currency: currencyCode,
  //   minimumFractionDigits: 0,
  //   style: 'currency',
  // }).format(parseFloat(price ? price : 0));

  const formattedPrice = Intl.NumberFormat('en-US').format(
    parseFloat(price ? price : 0)
  );

  if (compareAtPrice && compareAtPrice !== price) {
    // const formattedComparePrice = Intl.NumberFormat('en-US', {
    //   currency: currencyCode,
    //   minimumFractionDigits: 0,
    //   style: 'currency',
    // }).format(parseFloat(compareAtPrice ? compareAtPrice : 0));

    const formattedComparePrice = Intl.NumberFormat('en-US').format(
      parseFloat(compareAtPrice ? compareAtPrice : 0)
    );

    const percentOff = Math.round(
      ((compareAtPrice - price) / compareAtPrice) * 100
    );

    return (
      <>
        <OriginalPrice>{formattedComparePrice}</OriginalPrice> {formattedPrice}{' '}
        <PercentOff>-{percentOff}%</PercentOff>
      </>
    );
  }

  return formattedPrice;
};
