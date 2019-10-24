import React from 'react';
import styled from 'styled-components';

import Head from '@utils/seo';
import space from '@utils/space';
import { Container as BaseContainer, mq } from '@utils/styles';
import { Body, H200 } from '@utils/type';
import sandal from '@images/sandal.svg';
import BaseButton from '@components/Button';

const Description = styled(Body)`
  max-width: ${space[13]};
  text-align: center;
`;

const Button = styled(BaseButton)`
  margin-top: ${space[4]};
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${space[6]};
  flex-direction: column;
  width: 100%;

  & > * {
    width: 100%;
  }

  ${mq.gtmd} {
    flex-direction: row;

    & > * {
      width: auto;
    }

    & > *:first-child {
      margin-right: ${space[3]};
    }
  }
`;

const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  padding-top: ${space[6]};
  padding-bottom: ${space[8]};
  text-align: center;

  ${mq.gtmd} {
    padding-top: ${space[8]};
    padding-bottom: ${space[4]};
  }
`;

const Heading = styled(H200)`
  margin-bottom: ${space[4]};
`;

const Image = styled.img`
  height: 104px;
  margin-bottom: ${space[6]};
`;

const NotFoundPage = () => (
  <>
    <Head title="404 Not found" />
    <Container>
      <Image src={sandal} />
      <Heading>Uh Oh! Nothing to see here.</Heading>
      <Description>It appears that what you are looking for no longer exists here. Please return to the homepage or search for something different</Description>
      <Buttons>
        <Button href="/" theme="outline">
          Back to home
        </Button>
        <Button href="/products">
          Browse Products
        </Button>
      </Buttons>
    </Container>
  </>
);

export default NotFoundPage;
