import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import isEqual from 'react-fast-compare';

import { Body, H600 } from '@utils/type';
import Drawer from '@components/Drawer';

import * as styled from './styles';

class Filters extends Component {
  static propTypes = {
    activeFilters: PropTypes.shape({
      tags: PropTypes.array,
      years: PropTypes.array,
    }).isRequired,
    allTags: PropTypes.array,
    allYears: PropTypes.array,
    onClose: PropTypes.func.isRequired,
    onFilter: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
  };

  state = {
    activeFilters: this.props.activeFilters,
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

  handleSubmit = () => {
    const { activeFilters } = this.state;
    this.props.onFilter(activeFilters);
    this.props.onClose();
  };

  render() {
    const { activeFilters, allTags, allYears, onClose, open } = this.props;

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
        title="Filter"
      >
        <styled.Filters>
          <styled.Filter>
            <H600>Tags</H600>
            {allTags.map(tag => (
              <styled.Option
                key={tag}
                selected={activeFilters.tags.includes(tag)}
                onClick={() =>
                  this.handleFilterSelect('tags', tag)
                }
              >
                <Body>{tag}</Body>
              </styled.Option>
            ))}
          </styled.Filter>
          <styled.Filter>
            <H600>Year</H600>
            {allYears.map(year => (
              <styled.Option
                key={year}
                selected={activeFilters.years.includes(year)}
                onClick={() =>
                  this.handleFilterSelect('years', year)
                }
              >
                <Body>{year}</Body>
              </styled.Option>
            ))}
          </styled.Filter>
        </styled.Filters>
      </Drawer>
    );
  }
}

export default Filters;
