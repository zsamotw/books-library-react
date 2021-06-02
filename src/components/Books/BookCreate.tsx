import React, { useContext, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import BookForm from './BookForm';
import Book from '../../models/book.model';
import { StoreContext } from '../Store';
import httpPost from '../../http-service/httpPost';
import baseUrl from '../../http-service/base-url';

const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
`;

function BookCreate() {
  const { dispatch } = useContext(StoreContext);
  const [error, setError] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const history = useHistory();

  const handleCreate = (book: Book) => {
    setError('');

    const url = `${baseUrl}/books`;
    const actionCreatorAdd = (bookToAdd: Book) => (
      { type: 'ADD_BOOK', payload: bookToAdd }
    );

    httpPost(url, book, setIsCreating)
      .then((author) => {
        dispatch(actionCreatorAdd(author));
        history.push('/books');
      })
      .catch((err) => setError(err.message));
  };

  return (
    <Container>
      <Nav>
        <Button variant="outline-secondary" href="/books">Back</Button>
      </Nav>
      <h1>Create Book</h1>
      <BookForm saveBook={handleCreate} bookToUpdate={null} error={error} setError={setError} isSaving={isCreating} />
    </Container>
  );
}

export default BookCreate;
