const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const get = require('lodash/get');
const remark = require('remark');
const html = require('remark-html');
const slugify = require('slugify');

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
      allContentfulArticle {
        edges {
          node {
            author
            title
            slug
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

    // Create story pages from Contentful
    result.data.allContentfulArticle.edges.forEach(({ node }) => {
      console.log(`Creating story page from Contentful! ${node.slug}`);

      createPage({
        // TODO: Change this path!
        path: `stories/${node.slug}`,
        component: path.resolve('./src/templates/Story/index.js'),
        context: {
          slug: node.slug,
        },
      });
    });
  });
};

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;

  const typeDefs = [
    'type MarkdownRemark implements Node { fields: Fields, frontmatter: Frontmatter }',
    schema.buildObjectType({
      name: 'FieldsSections',
      fields: {
        body: 'String',
        type: 'String',
        html: 'String',
        caption: 'String',
        imageType: 'String',
        images: {
          type: '[File]',
          extensions: {
            fileByRelativePath: {},
          },
        },
      },
    }),
    schema.buildObjectType({
      name: 'Fields',
      fields: {
        slug: {
          type: 'String',
        },
        sections: {
          type: '[FieldsSections]',
        },
      },
    }),
    schema.buildObjectType({
      name: 'Frontmatter',
      fields: {
        about: 'String',
        authors: '[String]',
        date: 'Date',
        hero: {
          type: 'File',
          extensions: {
            fileByRelativePath: {},
          },
        },
        landingFeatured: 'Boolean',
        lede: 'String',
        sections: '[SectionPlaceholder]',
        storiesFeatured: 'Boolean',
        tags: '[String]',
        templateKey: 'String',
        title: 'String',
      },
    }),
    schema.buildObjectType({
      name: 'SectionPlaceholder',
      fields: {
        images: {
          type: '[File]',
          extensions: {
            fileByRelativePath: {},
          },
        },
      },
    }),
  ];

  createTypes(typeDefs);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // @TODO: Figure out `onCreateNode` for Contentful.
  // `fileAbsolutePath` is missing from Contentful nodes and the following code uses that field.
  if (node.internal.type === 'MarkdownRemark' && node.fileAbsolutePath) {
    const value = createFilePath({ node, getNode });

    if (node.frontmatter.templateKey === 'story') {
      createNodeField({
        name: 'slug',
        node,
        value: `/stories/${slugify(node.frontmatter.slug, { lower: true })}`,
      });
    } else {
      createNodeField({
        name: 'slug',
        node,
        value,
      });
    }

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
