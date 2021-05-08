import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { navigate } from '@reach/router';
import get from 'lodash/get';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import qs from 'querystringify';

import Head from '@utils/seo';
import { getSortedProductIds } from '@utils/shopify';
import { fadeInEntry } from '@utils/animations';

import ProductsContext from '@context/ProductsContext';
import Filters from '@components/Filters';
import ProductGrid from '@components/ProductGrid';
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
      handleFilterSelect: this.handleFilterSelect,
      clearFilters: this.clearFilters,
      handleSort: this.handleSort,
    };
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

  clearFilters = () => {
    this.setState({ activeFilters: { collection: [], productType: [] } });
  };

  filterProducts = ({ node: product }) => {
    const { activeFilters } = this.state;
    let matchesCollection = true;
    let matchesProductType = true;

    if (activeFilters.collection.length) {
      matchesCollection =
        activeFilters.collection.filter(activeFilter =>
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
    const { activeFilters, showFilters } = this.state;

    const products =
      Array.isArray(get(data, 'products.edges')) &&
      data.products.edges
        .filter(this.filterProducts)
        .sort(this.sortProducts)
        .map(({ node }) => ({
          id: get(node, 'id'),
          href: `/products/${get(node, 'handle')}`,
          images: [
            get(node, 'images[0].localFile.childImageSharp.fluid'),
            get(node, 'images[1].localFile.childImageSharp.fluid'),
          ],
          price: get(node, 'variants[0].price'),
          compareAtPrice: get(node, 'variants[0].compareAtPrice'),
          title: get(node, 'title'),
          productType: get(node, 'productType'),
          soldOut: !get(node, 'availableForSale'),
          onSale:
            Number(get(node, 'variants[0].compareAtPrice')) >
            Number(get(node, 'variants[0].price')),
        }));

    return (
      <ProductsContext.Provider value={this.state}>
        <Head title="Products" />
        <motion.div {...fadeInEntry()}>
          <ProductGrid
            title="Products"
            products={products}
            filters={activeFilters}
            openFilters={this.handleOpenFilters}
            description="Among the coziest this planet has to offer. Explore our new
              Permanent Collection, which features timeless aesthetic and
              uncompromising durability."
          />
        </motion.div>
        <Filters onClose={this.handleCloseFilters} open={showFilters} />
      </ProductsContext.Provider>
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
