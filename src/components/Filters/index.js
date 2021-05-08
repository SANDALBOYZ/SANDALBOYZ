import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import styled from 'styled-components';

import StoreContext from '@context/StoreContext';
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

const Container = styled.div`
  padding-top: 80px;
  padding-bottom: 40px;
  overflow-y: auto;
  height: calc(100% - 150px);
`;

const FilterListsContainer = styled.div`
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

]

function Filters({ open, onClose }) {
  const [productTypeFilters, setProductTypeFilters] = useState([]);
  const [collectionFilters, setCollectionFilters] = useState([]);
  // const context = useContext(StoreContext);

  // const { checkout, adding, customer } = context;

  useBodyScrollLock(open);
  useHideZeWidget(open);

  return (
    <Drawer onClose={onClose} open={open}>
      <Container>
        <FilterListsContainer>
          <FilterLists>
            <FilterTitle>Product Type</FilterTitle>
            <FilterItem>Slides</FilterItem>
            <FilterItem>Socks</FilterItem>
            <FilterItem>Shorts</FilterItem>
          </FilterLists>
          <FilterLists>
            <FilterTitle>Collection</FilterTitle>
            <FilterItem>Permanent</FilterItem>
            <FilterItem>Inline</FilterItem>
            <FilterItem>Special</FilterItem>
          </FilterLists>
          <FilterLists>
            <FilterTitle>Sort</FilterTitle>
            <Dropdown />
          </FilterLists>
        </FilterListsContainer>
      </Container>
      <Actions>
        <Button theme="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button>Apply</Button>
      </Actions>
    </Drawer>
  );
}

Filters.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Filters;
