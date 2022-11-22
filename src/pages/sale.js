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
import { fadeInEntry } from '@utils/animations';
import Filters from '@components/Filters';
import Header from '@components/Header';
import ProductGrid from '@components/ProductGrid';

const TextContainer = styled(motion.header)`
  text-align: center;
  padding: 0 ${space[1]};
`;

const PAGE_URL = '/sale';
class SalePage extends Component {
  constructor(props) {
    super(props);

    const search = qs.parse(props.location.search);
    const activeFilters = {
      collection: get(search, 'collection', '').split(',').filter(Boolean),
      productType: get(search, 'productType', '').split(',').filter(Boolean),
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
      matchesCollection =
        activeFilters.collection.filter((activeFilter) =>
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

  getCollections = (product) => {
    const collectionTags = get(product, 'tags', []).filter((tag) =>
      tag.includes('collection')
    );

    if (collectionTags.length === 0) {
      return '';
    }

    return collectionTags.map((collectionTag) => collectionTag.split(':')[1]);
  };

  handleFilter = (filters) => {
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

    navigate(`${PAGE_URL}${qs.stringify(query, true)}`);
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

      navigate(`${PAGE_URL}${qs.stringify(query, true)}`);
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

  handleSort = async (key) => {
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

    // const products =
    //   Array.isArray(get(data, 'saleCollection.edges[0].node.products')) &&
    //   data.products.edges.filter(this.filterProducts);

    const products = get(data, 'saleCollection.edges[0].node.products');
    const filteredProducts = products.filter(this.filterProducts);

    const isFiltered = activeFilters.collection.concat(
      activeFilters.productType
    ).length;

    return (
      <>
        <Head title="Black Friday Sale" />
        <motion.div {...fadeInEntry()}>
          <Header
            label="Black Friday / Cyber Monday"
            shrinkOnMobile
            title="Sale"
          />
          <TextContainer>All sales are final. Get up to 50% off past items. Spend $100 or more and get a free pair of socks. Add any sock to your cart to redeem offer - discount is automatically applied.</TextContainer>
          <ProductGrid
            filters={activeFilters}
            onFilter={this.handleFilter}
            products={products.sort(this.sortProducts).map((node) => ({
              id: get(node, 'id'),
              href: `/products/${get(node, 'handle')}`,
              images: [
                get(node, 'media[0].preview.image.gatsbyImageData'),
                get(node, 'media[1].preview.image.gatsbyImageData'),
              ],
              price: get(node, 'variants[0].price'),
              compareAtPrice: get(node, 'variants[0].compareAtPrice'),
              title: get(node, 'title'),
              productType: get(node, 'productType'),
              soldOut: get(node, 'totalInventory', 0) <= 0,
              onSale:
                Number(get(node, 'variants[0].compareAtPrice')) >
                Number(get(node, 'variants[0].price')),
            }))}
            title={''}
          />
        </motion.div>
      </>
    );

    // return (
    //   <TextContainer>
    //     <h1>Black Friday / Cyber Monday 2022</h1>
    //     <p>
    //       Our biggest sale of the year is over! Come back next year. Stay up to date on our
    //       Instagram <a href="https://www.instagram.com/sandalboyz">@sandalboyz</a>.
    //     </p>
    //   </TextContainer>
    // );
  }
}

export default SalePage;

export const salePageQuery = graphql`
  query SalePageQuery {
    saleCollection: allShopifyCollection(filter: { handle: { eq: "sale" } }) {
      edges {
        node {
          description
          title
          products {
            id
            productType
            tags
            title
            handle
            createdAt
            totalInventory
            media {
              id
              preview {
                image {
                  originalSrc
                  gatsbyImageData
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
  }
`;
