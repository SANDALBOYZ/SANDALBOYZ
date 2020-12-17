import React from 'react';
import CMS from 'netlify-cms-app';

import StylesheetInjector from '@utils/stylesheetInjector';
import PopupPreview from './preview-templates/PopupPreview';
import StoryPreview from './preview-templates/StoryPreview';

// Register preview styles
CMS.registerPreviewStyle('https://use.typekit.net/bmy0pxx.css');

// Register preview templates
CMS.registerPreviewTemplate('popup', props => (
  <StylesheetInjector>
    <PopupPreview {...props} />
  </StylesheetInjector>
));
CMS.registerPreviewTemplate('stories', props => (
  <StylesheetInjector>
    <StoryPreview {...props} />
  </StylesheetInjector>
));

if (window.CMS_MANUAL_INIT) {
  const config = {
    config: {
      backend:
        process.env.NODE_ENV === 'development'
          ? {
              name: 'file-system',
              api_root: 'http://localhost:8000/api',
            }
          : {
              name: 'git-gateway',
              branch: 'master',
            },
    },
  };

  if (process.env.NODE_ENV !== 'development') {
    config.config.publish_mode = 'editorial_workflow';
  }

  CMS.init(config);
}
