import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import styled from 'styled-components';

import ProductsContext from '@context/ProductsContext';
import { gtag } from '@utils/seo';
import { associateCheckout } from '@utils/shopify';
import { Body } from '@utils/type';
import space, { H_PADDING_MOBILE } from '@utils/space';
import { fonts, weights } from '@utils/fonts';
import { useBodyScrollLock, useHideZeWidget } from '@utils/hooks';
import colors from '@utils/colors';

import Button from '@components/Button';
import Drawer from '@components/Drawer';
import Dropdown from '@components/Dropdown';

const Title = styled.h2`
  font-family: ${fonts.GRANVILLE};
  font-weight: ${weights.REGULAR};
  font-size: 1.4rem;
  margin-top: 60px;
  margin-bottom: ${space[4]};
`;

const FilterListsContainer = styled.div`
  padding-bottom: 40px;
  overflow-y: auto;
  // height: calc(100% - 150px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
`;

const FilterLists = styled.div`
  margin-bottom: 20px;
`;

const FilterTitle = styled.h3`
  font-family: ${fonts.NIMBUS_CONDENSED};
  font-weight: ${weights.LIGHT};
  text-transform: uppercase;
  font-size: 10px;
  margin-bottom: 15px;
`;

const FilterItem = styled.button`
  background: 0;
  outline: 0;
  border: 0;
  padding: 0;
  display: block;
  font-family: ${fonts.NIMBUS};
  font-weight: ${props => (props.active ? weights.BOLD : weights.NORMAL)};

  & ~ & {
    padding-top: 15px;
  }
`;

export const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 15px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: ${H_PADDING_MOBILE};
  background-color: ${colors.WINTER_WHITE};
`;

const PRODUCT_TYPE_FILTERS = [
  { label: 'Slides', value: 'Court Slide' },
  { label: 'Socks', value: 'Sock' },
  { label: 'Shorts', value: 'Shorts' },
];

const COLLECTION_FILTERS = [
  { label: 'Permanent', value: 'Permanent' },
  { label: 'Inline', value: 'Inline' },
  { label: 'Special', value: 'Special Projects' },
];

function Filters({ open, onClose }) {
  const context = useContext(ProductsContext);

  console.log('\n\n\nfilters!');
  console.log(context);

  const {
    activeFilters: { collection, productType },
    handleFilterSelect,
    clearFilters,
  } = context;

  // const { checkout, adding, customer } = context;

  useBodyScrollLock(open);
  useHideZeWidget(open);

  return (
    <Drawer onClose={onClose} open={open}>
      <Title>Sort / Filter</Title>
      <FilterListsContainer>
        <FilterLists>
          <FilterTitle>Product Type</FilterTitle>
          {PRODUCT_TYPE_FILTERS.map(filter => (
            <FilterItem
              onClick={() => handleFilterSelect('productType', filter.value)}
              active={productType.includes(filter.value)}
              key={filter.value}
            >
              {filter.label}
            </FilterItem>
          ))}
        </FilterLists>
        <FilterLists>
          <FilterTitle>Collection</FilterTitle>
          {COLLECTION_FILTERS.map(filter => (
            <FilterItem
              onClick={() => handleFilterSelect('collection', filter.value)}
              active={collection.includes(filter.value)}
              key={filter.value}
            >
              {filter.label}
            </FilterItem>
          ))}
        </FilterLists>
        <FilterLists>
          <FilterTitle>Sort</FilterTitle>
          <Dropdown />
        </FilterLists>
      </FilterListsContainer>
      <Actions>
        <Button
          theme="outline"
          onClick={() => {
            clearFilters();
            onClose();
          }}
        >
          Clear
        </Button>
        <Button onClick={onClose}>Apply</Button>
      </Actions>
    </Drawer>
  );
}

Filters.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Filters;
