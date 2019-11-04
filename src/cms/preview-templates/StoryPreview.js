import React from 'react';
import PropTypes from 'prop-types';
import remark from 'remark';
import html from 'remark-html';

import { StoryTemplate } from '@templates/Story';

const StoryPreview = ({ entry }) => {
  const sections = entry.getIn(['data', 'sections']);
  const authors = entry.getIn(['data', 'authors']);

  return (
    <StoryTemplate
      story={{
        frontmatter: {
          authors: authors ? authors.toJS() : [],
          hero: {
            childImageSharp: {
              fluid: {
                src: entry.getIn(['data', 'hero']),
                srcSet: `${entry.getIn(['data', 'hero'])} 2550w`,
                sizes: '(max-width: 2550px) 100vw, 2550px',
              },
            },
          },
          lede: entry.getIn(['data', 'lede']),
          title: entry.getIn(['data', 'title']),
        },
        fields: {
          sections: sections ? sections.toJS().map(section => {
            if (section.type === 'image') {
              return {
                ...section,
                images: section.images.map(image => ({
                  childImageSharp: {
                    fluid: {
                      src: image,
                      srcSet: `${image} 2550w`,
                      sizes: '(max-width: 2550px) 100vw, 2550px',
                    },
                  },
                })),
              };
            }

            return {
              ...section,
              html: remark()
                  .use(html)
                  .processSync(section.body)
                  .toString(),
            };
          }) : [],
        },
      }}
    />
  );
};

StoryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }).isRequired,
};

export default StoryPreview;
