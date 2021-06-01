import React from 'react';
import { Button, Container } from 'react-bootstrap';
import BooksList from './BooksList';

export default function Books() {
  return (
    <Container>
      <Button href="books/create">create</Button>
      <BooksList />
    </Container>
  );
}
