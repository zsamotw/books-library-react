import React, { useContext, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import BookForm from './BookForm';
import Book from '../../models/book.model';
import { StoreContext } from '../Store';
import httpPost from '../../http-servis/httpPost';

const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
`;

function BooksCreate() {
  const { dispatch } = useContext(StoreContext);
  const [error, setError] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const url = 'http://139.162.147.107:3523/books';
  const actionCreatorAdd = (bookToAdd: Book) => (
    { type: 'ADD_BOOK', payload: bookToAdd }
  );
  const history = useHistory();

  const handleCreate = (book: Book) => {
    setError('');
    const body = JSON.stringify(book);
    httpPost(url, body, setIsCreating)
      .then((author) => {
        dispatch(actionCreatorAdd(author));
        history.push('/books');
      })
      .catch((err) => setError(err.message));
  };

  return (
    <Container>
      <Nav>
        <Button href="/books">Back</Button>
      </Nav>
      <h1>Create Book</h1>
      <BookForm saveBook={handleCreate} error={error} setError={setError} isSaving={isCreating} />
    </Container>
  );
}

export default BooksCreate;
