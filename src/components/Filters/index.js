import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import isEqual from 'react-fast-compare';

import { Body, H600 } from '@utils/type';
import Drawer from '@components/Drawer';
import Select from '@components/formElements/Select';

import * as styled from './styles';

class Filters extends Component {
  static propTypes = {
    activeFilters: PropTypes.shape({
      collection: PropTypes.array,
      productType: PropTypes.array,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
    onFilter: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };

  state = {
    activeFilters: this.props.activeFilters,
    activeSort: 'CREATED_AT',
  };

  componentDidUpdate(prevProps) {
    if (prevProps.open !== this.props.open) {
      if (this.props.open) {
        disableBodyScroll(this.target);
      } else {
        enableBodyScroll(this.target);
      }
    }

    if (!isEqual(this.props.activeFilters, prevProps.activeFilters)) {
      this.setState({ activeFilters: this.props.activeFilters });
    }
  }

  handleFilterSelect = (key, value) => {
    const { activeFilters } = this.state;
    const existing = activeFilters[key];
    const currentPos = existing.indexOf(value);

    if (currentPos > -1) {
      existing.splice(currentPos, 1);
    } else {
      existing.push(value);
    }

    this.setState({ activeFilters: { ...activeFilters, [key]: existing } });
  };

  handleSort = (evt) => {
    this.setState({ activeSort: evt.target.value });
  };

  handleSubmit = () => {
    const { activeFilters, activeSort } = this.state;
    this.props.onFilter(activeFilters);
    this.props.onSort(activeSort);
    this.props.onClose();
  };

  render() {
    const { activeFilters, onClose, open } = this.props;

    return (
      <Drawer
        actions={{
          close: {
            name: 'Cancel',
          },
          next: {
            name: 'Apply',
            onClick: this.handleSubmit,
          },
        }}
        onClose={onClose}
        open={open}
        title="Sort/Filter"
      >
        <styled.Filters>
          <styled.Filter>
            <H600>Product Type</H600>
            <styled.Option
              selected={activeFilters.productType.includes('Court Slide')}
              onClick={() =>
                this.handleFilterSelect('productType', 'Court Slide')
              }
            >
              <Body>Court Slide</Body>
            </styled.Option>
            <styled.Option
              selected={activeFilters.productType.includes('Sock')}
              onClick={() => this.handleFilterSelect('productType', 'Sock')}
            >
              <Body>Sock</Body>
            </styled.Option>
          </styled.Filter>
          <styled.Filter>
            <H600>Collection</H600>
            <styled.Option
              selected={activeFilters.collection.includes('Inline')}
              onClick={() => this.handleFilterSelect('collection', 'Inline')}
            >
              <Body>Inline</Body>
            </styled.Option>
            <styled.Option
              selected={activeFilters.collection.includes('Special Projects')}
              onClick={() =>
                this.handleFilterSelect('collection', 'Special Projects')
              }
            >
              <Body>Special Projects</Body>
            </styled.Option>
            <styled.Option
              selected={activeFilters.collection.includes('Signature Series')}
              onClick={() =>
                this.handleFilterSelect('collection', 'Signature Series')
              }
            >
              <Body>Signature Series</Body>
            </styled.Option>
          </styled.Filter>
        </styled.Filters>
        <Select
          label="Sort By"
          name="sortKey"
          options={[
            { name: 'Default', value: 'CREATED_AT' },
            { name: 'Price Ascending', value: 'PRICE_ASC' },
            { name: 'Price Descending', value: 'PRICE_DESC' },
            { name: 'Best Selling', value: 'BEST_SELLING' },
            { name: 'Product Type', value: 'PRODUCT_TYPE' },
          ]}
          onChange={this.handleSort}
        />
      </Drawer>
    );
  }
}

export default Filters;
