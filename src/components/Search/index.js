import React, { Component } from 'react';
import { Index } from 'elasticlunr';
import get from 'lodash/get';

import { H400 } from '@utils/type';
import SearchForm from '@components/SearchForm';
import SearchResult from '@components/SearchResult';
import * as styled from './styles';

class Search extends Component {
  state = {
    query: '',
    results: [],
  };

  getOrCreateIndex = () => {
    if (this.index) {
      return this.index;
    }

    return Index.load(this.props.index);
  };

  handleSearch = query => {
    this.index = this.getOrCreateIndex();

    this.setState({
      query,
      results: this.index
        .search(query, {})
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    });
  };

  render() {
    const { products } = this.props;
    const { results, query } = this.state;

    return (
      <styled.Wrapper>
        <SearchForm onSearch={this.handleSearch} />
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
                    'images[0].localFile.childImageSharp.fluid.src'
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
