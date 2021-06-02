import React from 'react';
import { Button, Container } from 'react-bootstrap';
import styled from 'styled-components';
import BooksList from './BooksList';

const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
`;

export default function Books() {
  return (
    <Container>
      <Nav>
        <Button href="books/create">Create</Button>
      </Nav>
      <BooksList />
    </Container>
  );
}
