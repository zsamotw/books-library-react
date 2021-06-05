import React from 'react';
import { Container } from 'react-bootstrap';
import PublisherCreate from './PublishersCreate';
import PublishersList from './PublishersList';

function Authors() {
  return (
    <Container>
      <PublisherCreate />
      <h1>Publishers</h1>
      <PublishersList />
    </Container>
  );
}

export default Authors;
