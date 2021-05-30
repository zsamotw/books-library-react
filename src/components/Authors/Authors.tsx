import React from 'react';
import { Container } from 'react-bootstrap';
import AuthorsList from './AuthorsList';
import AuthorCreate from './AuthorCreate';

function Authors() {
  return (
    <Container>
      <AuthorCreate />
      <AuthorsList />
    </Container>
  );
}

export default Authors;
