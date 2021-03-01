const React = require('react');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const zESettings = {
  webWidget: {
    zIndex: 8000,
    contactForm: {
      title: {
        '*': 'Help',
      },
      fields: [
        { id: 'description', prefill: { '*': 'My dog ate my sandal!' } },
        { id: 360038322313, prefill: { '*': '' } },
      ],
    },
  },
};

const contactFormSettings = `
  window.zESettings = ${JSON.stringify(zESettings)};
`;

const FACEBOOK_PIXEL_ID = process.env.FACEBOOK_PIXEL_ID || '2359259647497093';

exports.onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  if (process.env.NODE_ENV === 'production') {
    setHeadComponents([
      <script
        key="facebook-pixel"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            // See https://developers.facebook.com/docs/marketing-apis/data-processing-options
            fbq('dataProcessingOptions', ['LDU'], 0, 0);
            fbq('init', '${FACEBOOK_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />,
    ]);
  }

  setHeadComponents([
    <script
      type="text/javascript"
      src="https://js.afterpay.com/afterpay-1.x.js"
      async
    ></script>,
  ]);

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
