import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Navigation } from '../shared/Navigation';
import BooksList from './BooksList';

export default function Books() {
  return (
    <Container>
      <Navigation>
        <Button variant="outline-success" href="books/create">Create book</Button>
      </Navigation>
      <h1>Books</h1>
      <BooksList />
    </Container>
  );
}
