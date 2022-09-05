import React from 'react';
import styled from 'styled-components';

const OriginalPrice = styled.span`
  text-decoration: line-through;
`;

const PercentOff = styled.span`
  color: #f22e2e;
`;

const getPrice = (price, compareAtPrice = null, currencyCode = 'USD') => {
  const priceParsed = parseFloat(price ? price : 0);
  const formattedPrice =
    priceParsed % 1 === 0 ? priceParsed.toString() : priceParsed.toFixed(2);

  if (compareAtPrice && compareAtPrice !== price) {
    const compareAtPriceParsed = parseFloat(
      compareAtPrice ? compareAtPrice : 0,
    );

    const formattedComparePrice =
      compareAtPriceParsed % 1 === 0
        ? compareAtPriceParsed.toString()
        : compareAtPriceParsed.toFixed(2);

    const percentOff = Math.round(
      ((compareAtPrice - price) / compareAtPrice) * 100,
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

export default getPrice;
