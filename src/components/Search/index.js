import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import { Index } from 'elasticlunr';
import get from 'lodash/get';
import qs from 'querystringify';
import styled from 'styled-components';

import { H400 } from '@utils/type';
import { fonts, weights } from '@utils/fonts';
import space from '@utils/space';
import { TextContainer } from '@utils/styles';

import SearchForm from '@components/SearchForm';
import SearchResult from '@components/SearchResult';

export const NoResults = styled.div`
  padding: ${space[8]} 0 0;
`;

export const Wrapper = styled(TextContainer)`
  margin-top: ${space[10]};
  margin-bottom: ${space[8]};
`;

const H1 = styled.h1`
  font-family: ${fonts.GRANVILLE};
  font-weight: ${weights.REGULAR};
  font-size: 2rem;
  margin-bottom: ${space[2]};
`;

class Search extends Component {
  constructor(props) {
    super(props);

    this.index = this.getOrCreateIndex();

    let query = '';
    if (get(props, 'location.search')) {
      query = get(qs.parse(props.location.search), 'search', '');
    }

    this.state = {
      query,
      results: this.index
        .search(query, { expand: true })
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    };
  }

  getOrCreateIndex = () => {
    if (this.index) {
      return this.index;
    }

    return Index.load(this.props.index);
  };

  handleSearch = query => {
    const { location } = this.props;

    this.setState(
      {
        query,
        results: this.index
          .search(query, { expand: true })
          .map(({ ref }) => this.index.documentStore.getDoc(ref)),
      },
      () => {
        navigate(`${location.pathname}?${qs.stringify({ search: query })}`);
      }
    );
  };

  render() {
    const { products } = this.props;
    const { results, query } = this.state;

    return (
      <Wrapper>
        <H1>Look for Stuff</H1>
        <SearchForm onSearch={this.handleSearch} query={query} />
        {query && !results.length ? (
          <NoResults>
            <H400>No results</H400>
          </NoResults>
        ) : (
          <div>
            {results.map(result => {
              const matchingProduct = products.find(
                product => product.id === result.id
              );
              return (
                <SearchResult
                  key={get(matchingProduct, 'id')}
                  collection={get(matchingProduct, 'collection')}
                  description={get(matchingProduct, 'description')}
                  href={`/products/${get(matchingProduct, 'handle')}`}
                  image={get(
                    matchingProduct,
                    'images[0].localFile.childImageSharp.fluid'
                  )}
                  price={get(matchingProduct, 'variants[0].price')}
                  title={get(matchingProduct, 'title')}
                />
              );
            })}
          </div>
        )}
      </Wrapper>
    );
  }
}

Search.propTypes = {
  index: PropTypes.any,
  location: PropTypes.any,
  products: PropTypes.array,
};

export default Search;
