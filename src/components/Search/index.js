import React, { Component } from 'react';
import { navigate } from 'gatsby';
import { Index } from 'elasticlunr';
import get from 'lodash/get';
import qs from 'querystringify';

import { H400 } from '@utils/type';
import SearchForm from '@components/SearchForm';
import SearchResult from '@components/SearchResult';
import * as styled from './styles';

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
        .search(query, {})
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
          .search(query, {})
          .map(({ ref }) => this.index.documentStore.getDoc(ref)),
      },
      () => {
        navigate(`${location.pathname}/?${qs.stringify({ search: query })}`);
      }
    );
  };

  render() {
    const { products } = this.props;
    const { results, query } = this.state;

    return (
      <styled.Wrapper>
        <SearchForm onSearch={this.handleSearch} query={query} />
        {query && !results.length ? (
          <styled.NoResults>
            <H400>No results</H400>
          </styled.NoResults>
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
      </styled.Wrapper>
    );
  }
}

export default Search;
