export default (price, currencyCode = 'USD') => {

  const formattedPrice = Intl.NumberFormat(undefined, {
    currency: currencyCode,
    minimumFractionDigits: 0,
    style: 'currency',
  }).format(parseFloat(price ? price : 0));

  return `${formattedPrice} ${currencyCode}`;
};
