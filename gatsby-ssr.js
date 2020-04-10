const React = require('react');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const zESettings = {
  webWidget: {
    zIndex: 9998,
    contactForm: {
      title: {
        '*': 'Help',
      },
      subject: true,
      fields: [
        { id: 'subject', prefill: { '*': 'Order Number (if applicable)' } },
        { id: 'description', prefill: { '*': 'My dog ate my sandal!' } },
        { id: 360038322313, prefill: { '*': 'ABC123' } },
      ],
    },
  },
};

const contactFormSettings = `
  window.zESettings = ${JSON.stringify(zESettings)};
`;

exports.onRenderBody = async ({ pathname, setPostBodyComponents }) => {
  return setPostBodyComponents([
    <script
      type="text/javascript"
      id="ze-snippet"
      key="ze-snippet"
      src="https://static.zdassets.com/ekr/snippet.js?key=edefe9ec-abec-4c42-870d-5a89a57c0f68"
    />,
    <script
      type="text/javascript"
      key="ze-settings"
      dangerouslySetInnerHTML={{ __html: contactFormSettings }}
    />,
  ]);
};
