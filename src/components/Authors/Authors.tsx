import React from 'react';
import { Container } from 'react-bootstrap';
import AuthorsList from './AuthorsList';
import AuthorCreate from './AuthorCreate';

function Authors() {
  return (
    <Container>
      <AuthorCreate />
      <h1>Authors</h1>
      <AuthorsList />
    </Container>
  );
}

export default Authors;
