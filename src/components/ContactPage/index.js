import React from 'react';
import styled from 'styled-components';

import { Body, ContentLabel } from '@utils/type';
import space, { H_PADDING_MOBILE } from '@utils/space';
import { mq } from '@utils/styles';
import { fonts, weights } from '@utils/fonts';

export const H2 = styled.h2`
  font-family: ${fonts.GRANVILLE};
  font-size: 1.2rem;
  margin-bottom: ${space[3]};
`;

export const HelpText = styled.div`
  width: 100%;
  margin-top: ${space[4]};
  margin-bottom: ${space[6]};

  ${mq.gtlg} {
    width: 50%;
    margin-right: ${space[8]};
    margin-bottom: 0;
  }
`;

export const TalkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${space[8]};
  margin-bottom: ${space[8]};
  padding: 0 ${H_PADDING_MOBILE};

  ${mq.gtlg} {
    align-items: center;
    margin-top: 0;
    padding: ${space[10]} 0 ${space[4]};
    text-align: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: ${space[14]};
  margin-bottom: ${space[7]};
`;

export const Emails = styled.div`
  display: flex;
  flex-direction: column;

  ${mq.gtlg} {
    flex-direction: row;
    justify-content: center;
    text-align: left;
  }
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: ${space[4]};
  text-align: center;

  ${mq.gtlg} {
    padding: 0 ${space[6]};
    text-align: left;

    &:not(:last-child) {
      border-right: 1px solid #333;
    }
  }
`;

export const HereButton = styled.button`
  border: 0;
  outline: 0;
  background: 0;
  padding: 0;
  font-weight: ${weights.BOLD};
  cursor: pointer;
`;

export const StyledBody = styled(Body)`
  margin-top: 10px;
`;

const Contact = () => {
  const openForm = () => {
    if (typeof zE === 'function') {
      /* eslint-disable no-undef */
      zE('webWidget', 'show');
      zE('webWidget', 'open');
      /* eslint-enable no-undef */
    }
  };

  return (
    <>
      <TalkWrapper>
        <TextWrapper>
          <H2>I need help with an order!</H2>
          <Body>
            Questions about your order? Please do not hesitate to use our yellow
            floating help widget to get in touch with a real life human being
            from SANDALBOYZ. We will respond to any and every topic regarding
            your order within 24 hours. Guaranteed to be robot free{' '}
            <span role="img" aria-label="no">
              🚫
            </span>
            <span role="img" aria-label="robot">
              🤖
            </span>
            .
          </Body>
          <StyledBody>
            Can't find the widget? Click{' '}
            <HereButton onClick={openForm}>here</HereButton> to open our contact
            form.
          </StyledBody>
        </TextWrapper>
        <TextWrapper>
          <H2>I just wanna talk!</H2>
          <Body>
            Have a non-order related question? Press? Sales? Just need someone
            to talk to? Shoulder to lean on? Please direct all other inquiries
            to our catchall contact email. Emails regarding orders sent to this
            email address will (unfortunately) be laughed at and not responded
            to. Just kidding, we respond to everything.
          </Body>
        </TextWrapper>
        <Emails>
          <Email>
            <ContentLabel>Let's talk:</ContentLabel>
            <a href="mailto:contact@sandalboyz.com">
              <Body>contact@sandalboyz.com</Body>
            </a>
          </Email>
        </Emails>
      </TalkWrapper>
    </>
  );
};

export default Contact;
