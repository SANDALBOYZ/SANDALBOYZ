import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { navigate } from '@reach/router';
import get from 'lodash/get';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import qs from 'querystringify';

import Head from '@utils/seo';
import { getSortedProductIds } from '@utils/shopify';
import space from '@utils/space';
import { Container } from '@utils/styles';
import { Body, H300 } from '@utils/type';
import { fadeInEntry } from '@utils/animations';
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
  constructor(props) {
    super(props);

    const search = qs.parse(props.location.search);
    const activeFilters = {
      collection: get(search, 'collection', '')
        .split(',')
        .filter(Boolean),
      productType: get(search, 'productType', '')
        .split(',')
        .filter(Boolean),
    };

    this.state = {
      activeFilters,
      activeSort: search.sort || 'CREATED_AT',
      showFilters: false,
      sortedProductIds: [],
    };
  }

  componentDidMount() {
    const { location } = this.props;
    const search = qs.parse(location.search);
    this.handleSort(search.sort);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeSort !== this.state.activeSort) {
      const { location } = this.props;
      const search = qs.parse(location.search);
      this.handleSort(search.sort);
    }
  }

  filterProducts = ({ node: product }) => {
    const { activeFilters } = this.state;
    let matchesCollection = true;
    let matchesProductType = true;

    if (activeFilters.collection.length) {
      matchesCollection = activeFilters.collection.filter(activeFilter =>
        this.getCollections(product).includes(activeFilter)
      ).length > 0;
    }

    if (activeFilters.productType.length) {
      matchesProductType = activeFilters.productType.includes(
        product.productType
      );
    }

    return matchesCollection && matchesProductType;
  };

  getCollections = product => {
    const collectionTags = get(product, 'tags', []).filter(tag =>
      tag.includes('collection')
    );

    if (collectionTags.length === 0) {
      return '';
    }

    return collectionTags.map(collectionTag => collectionTag.split(':')[1]);
  };

  handleFilter = filters => {
    const { location } = this.props;

    const query = qs.parse(location.search);

    if (get(filters, 'collection')) {
      const collectionFilters = filters.collection.join(',');

      if (collectionFilters.length) {
        query.collection = collectionFilters;
      } else {
        delete query.collection;
      }
    }

    if (get(filters, 'productType')) {
      const productTypeFilters = filters.productType.join(',');

      if (productTypeFilters.length) {
        query.productType = productTypeFilters;
      } else {
        delete query.productType;
      }
    }

    navigate(`/products${qs.stringify(query, true)}`);
    this.setState({ activeFilters: filters });
  };

  handleCloseFilters = (filters, sort) => {
    if (filters && sort) {
      const { location } = this.props;
      const query = qs.parse(location.search);

      if (sort === 'CREATED_AT') {
        delete query.sort;
      } else {
        query.sort = sort;
      }

      if (get(filters, 'collection')) {
        const collectionFilters = filters.collection.join(',');

        if (collectionFilters.length) {
          query.collection = collectionFilters;
        } else {
          delete query.collection;
        }
      }

      if (get(filters, 'productType')) {
        const productTypeFilters = filters.productType.join(',');

        if (productTypeFilters.length) {
          query.productType = productTypeFilters;
        } else {
          delete query.productType;
        }
      }

      navigate(`/products${qs.stringify(query, true)}`);
      this.setState({
        activeFilters: filters,
        activeSort: sort,
        showFilters: false,
      });
    } else {
      this.setState({ showFilters: false });
    }
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

    this.setState({ activeSort: key, sortedProductIds });
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
    const { activeFilters, activeSort, showFilters } = this.state;

    const products =
      Array.isArray(get(data, 'products.edges')) &&
      data.products.edges.filter(this.filterProducts);

    const isFiltered = activeFilters.collection.concat(
      activeFilters.productType
    ).length;

    return (
      <>
        <Head title="Products" />
        <motion.div {...fadeInEntry()}>
          <Header
            label={get(data, 'productIndex.frontmatter.pageTitle')}
            shrinkOnMobile
            title="Products"
          >
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
                compareAtPrice: get(node, 'variants[0].compareAtPrice'),
                title: get(node, 'title'),
                soldOut: !get(node, 'availableForSale'),
                onSale:
                  Number(get(node, 'variants[0].compareAtPrice')) >
                  Number(get(node, 'variants[0].price')),
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
        </motion.div>
        <Filters
          activeFilters={activeFilters}
          activeSort={activeSort}
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
    productIndex: markdownRemark(
      frontmatter: { templateKey: { eq: "productIndex" } }
    ) {
      id
      frontmatter {
        pageTitle
      }
    }
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
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
          variants {
            price
            compareAtPrice
          }
        }
      }
    }
  }
`;
