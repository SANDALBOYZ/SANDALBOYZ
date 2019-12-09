import React from 'react';
import styled from 'styled-components';

const OriginalPrice = styled.span`
  text-decoration: line-through;
`;

export default (price, compareAtPrice = null, currencyCode = 'USD') => {
  const formattedPrice = Intl.NumberFormat(undefined, {
    currency: currencyCode,
    minimumFractionDigits: 0,
    style: 'currency',
  }).format(parseFloat(price ? price : 0));

  if (compareAtPrice && compareAtPrice !== price) {
    const formattedComparePrice = Intl.NumberFormat(undefined, {
      currency: currencyCode,
      minimumFractionDigits: 0,
      style: 'currency',
    }).format(parseFloat(compareAtPrice ? compareAtPrice : 0));

    return (
      <>
        <OriginalPrice>
          {formattedComparePrice}
        </OriginalPrice>
        {' '}
        {formattedPrice} {currencyCode}
      </>
    );
  }

  return `${formattedPrice} ${currencyCode}`;
};
