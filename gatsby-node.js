const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const get = require('lodash/get');
const remark = require('remark');
const html = require('remark-html');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
      allMarkdownRemark(filter: {frontmatter: { templateKey: { eq: "story" } } }) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    // Create product pages
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
      createPage({
        path: `/products/${node.handle}/`,
        component: path.resolve('./src/templates/Product/index.js'),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          handle: node.handle,
        },
      });
    });

    // Create story pages
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/Story/index.js'),
        context: {
          id: node.id,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: 'slug',
      node,
      value,
    });

    createNodeField({
      name: 'sections',
      node,
      value: get(node, 'frontmatter.sections', []).map(section => ({
        ...section,
        html:
          get(section, 'type') === 'text'
            ? remark()
                .use(html)
                .processSync(get(section, 'body', ''))
                .toString()
            : undefined,
      })),
    });
  }
};
