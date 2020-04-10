const React = require('react');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contactFormSettings = `
  window.zESettings = {
    webWidget: {
      contactForm: {
        fields: [
          { id: 'description', prefill: { '*': 'I need help with an order!' } },
          { id: 360038322313, prefill: { '*': 'Order #ABC123' } }
        ]
      }
    }
  };
`;

exports.onRenderBody = ({ pathname, setHeadComponents }) => {
  return setHeadComponents([
    <script
      id="ze-snippet"
      key="ze-snippet"
      src="https://static.zdassets.com/ekr/snippet.js?key=edefe9ec-abec-4c42-870d-5a89a57c0f68"
    />,
    <script
      key="ze-settings"
      dangerouslySetInnerHTML={{ __html: contactFormSettings }}
    />,
  ]);
};
