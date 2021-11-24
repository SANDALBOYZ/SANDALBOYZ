import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ProductsContext from '@context/ProductsContext';
import space, { H_PADDING_MOBILE } from '@utils/space';
import { fonts, weights } from '@utils/fonts';
import { useBodyScrollLock, useHideZeWidget } from '@utils/hooks';
import colors from '@utils/colors';

import Button2 from '@components/Button2';
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
  height: calc(100% - 150px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content;
  column-gap: 20px;
`;

const FilterLists = styled.div`
  margin-bottom: 20px;
  height: 100%;
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
  cursor: pointer;

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
  { label: 'Slides', value: 'Court Slides' },
  { label: 'Socks', value: 'Socks' },
  { label: 'Shorts', value: 'Shorts' },
];

const COLLECTION_FILTERS = [
  { label: 'Permanent', value: 'Permanent' },
  { label: 'Inline', value: 'Inline' },
  { label: 'Special', value: 'Special Projects' },
  { label: 'Sale', value: 'Sale' },
];

function Filters({ open, onClose }) {
  const context = useContext(ProductsContext);

  const {
    activeFilters: { collection, productType },
    handleFilterSelect,
    clearFilters,
    activeSort,
    handleSort,
  } = context;

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
          <Dropdown
            label="Sort"
            name="sortKey"
            options={[
              { name: 'Newest', value: 'CREATED_AT' },
              { name: 'Price Ascending', value: 'PRICE_ASC' },
              { name: 'Price Descending', value: 'PRICE_DESC' },
              { name: 'Best Selling', value: 'BEST_SELLING' },
              { name: 'Product Type', value: 'PRODUCT_TYPE' },
            ]}
            value={activeSort}
            onChange={handleSort}
          />
        </FilterLists>
      </FilterListsContainer>
      <Actions>
        <Button2
          theme="outline"
          onClick={() => {
            clearFilters();
            onClose();
          }}
        >
          Clear
        </Button2>
        <Button2 onClick={onClose}>Apply</Button2>
      </Actions>
    </Drawer>
  );
}

Filters.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Filters;
