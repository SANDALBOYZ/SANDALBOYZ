import React, { Component } from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import styled from 'styled-components';

import Head from '@utils/seo';
import { getSortedProductIds } from '@utils/shopify';
import space from '@utils/space';
import { Container } from '@utils/styles';
import { Body, H300 } from '@utils/type';
import sandal from '@images/sandal.svg';
import Button from '@components/Button';
import Filters from '@components/Filters';
import Header from '@components/Header';
import ProductGrid from '@components/ProductGrid';

const Empty = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${space[8]} 0;
`;

const Heading = styled(H300)`
  margin-bottom: ${space[2]};
`;

const Image = styled.img`
  height: 64px;
  margin-bottom: ${space[5]};
`;

class ProductsPage extends Component {
  state = {
    activeFilters: {
      collection: [],
      productType: [],
    },
    showFilters: false,
    sortedProductIds: [],
  };

  filterProducts = ({ node: product }) => {
    const { activeFilters } = this.state;
    let matchesCollection = true;
    let matchesProductType = true;

    if (activeFilters.collection.length) {
      matchesCollection = activeFilters.collection.includes(
        this.getCollection(product)
      );
    }

    if (activeFilters.productType.length) {
      matchesProductType = activeFilters.productType.includes(
        product.productType
      );
    }

    return matchesCollection && matchesProductType;
  };

  getCollection = product => {
    const collectionTag = get(product, 'tags', []).find(tag =>
      tag.includes('collection')
    );

    if (!collectionTag) {
      return '';
    }

    return collectionTag.split(':')[1];
  };

  handleFilter = filters => {
    this.setState({ activeFilters: filters });
  };

  handleCloseFilters = () => {
    this.setState({ showFilters: false });
  };

  handleOpenFilters = () => {
    this.setState({ showFilters: true });
  };

  handleSort = async key => {
    let sortKey = key;
    let reverse = false;

    if (sortKey === 'PRICE_ASC') {
      sortKey = 'PRICE';
    } else if (sortKey === 'PRICE_DESC') {
      sortKey = 'PRICE';
      reverse = true;
    } else if (sortKey === 'CREATED_AT') {
      reverse = true;
    }

    const { sortedProductIds } = await getSortedProductIds(sortKey, reverse);

    this.setState({ sortedProductIds });
  };

  sortProducts = ({ node: productA }, { node: productB }) => {
    const { sortedProductIds } = this.state;

    if (!sortedProductIds.length) {
      return 0;
    }

    const indexA = sortedProductIds.indexOf(productA.id);
    const indexB = sortedProductIds.indexOf(productB.id);

    if (indexA < indexB) {
      return -1;
    } else if (indexA > indexB) {
      return 1;
    }

    return 0;
  };

  render() {
    const { data } = this.props;
    const { activeFilters, showFilters } = this.state;

    const products =
      Array.isArray(get(data, 'products.edges')) &&
      data.products.edges.filter(this.filterProducts);

    const isFiltered = activeFilters.collection.concat(
      activeFilters.productType
    ).length;

    return (
      <>
        <Head title="Products" />
        <Header label="Fall 2019 Collections" shrinkOnMobile title="Products">
          <Button theme="text" onClick={this.handleOpenFilters}>
            Sort/Filter
          </Button>
        </Header>
        {products.length ? (
          <ProductGrid
            filters={activeFilters}
            onFilter={this.handleFilter}
            products={products.sort(this.sortProducts).map(({ node }) => ({
              id: get(node, 'id'),
              href: `/products/${get(node, 'handle')}`,
              images: [
                get(node, 'images[0].localFile.childImageSharp.fluid'),
                get(node, 'images[1].localFile.childImageSharp.fluid'),
              ],
              price: get(node, 'variants[0].price'),
              title: get(node, 'title'),
              soldOut: !get(node, 'availableForSale'),
            }))}
            title={isFiltered ? 'Filtered Results' : 'All Products'}
          />
        ) : (
          <Empty>
            <Image src={sandal} />
            <Heading>No products found</Heading>
            <Body>
              Try selecting different filters to view more available products.
            </Body>
          </Empty>
        )}
        <Filters
          activeFilters={activeFilters}
          onFilter={this.handleFilter}
          onClose={this.handleCloseFilters}
          onSort={this.handleSort}
          open={showFilters}
        />
      </>
    );
  }
}

export default ProductsPage;

export const productsPageQuery = graphql`
  query ProductsPageQuery {
    products: allShopifyProduct(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          availableForSale
          productType
          tags
          title
          handle
          createdAt
          images {
            id
            originalSrc
            localFile {
              childImageSharp {
                fluid(maxWidth: 910) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          variants {
            price
          }
        }
      }
    }
  }
`;
