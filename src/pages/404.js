import React from 'react';
import styled from 'styled-components';

import Head from '@utils/seo';
import space from '@utils/space';
import { Body, H100 } from '@utils/type';
import BaseButton from '@components/Button';

const Button = styled(BaseButton)`
  margin-top: ${space[4]};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  padding: ${space[8]} 0;
`;

const Heading = styled(H100)`
  margin-bottom: ${space[2]};
`;

const NotFoundPage = () => (
  <>
    <Head title="404 Not found" />
    <Container>
      <Heading>404</Heading>
      <Body>Sorry, we couldn't find what you're looking for.</Body>
      <Button href="/" size="small">
        Return to home
      </Button>
    </Container>
  </>
);

export default NotFoundPage;
