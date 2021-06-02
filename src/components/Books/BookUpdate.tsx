import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Button, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { StoreContext } from '../Store';
import baseUrl from '../../http-servis/base-url';
import Book from '../../models/book.model';
import BookForm from './BookForm';
import httpGet from '../../http-servis/httpGet';
import httpPut from '../../http-servis/httpPut';

type BookParams = {
  id: string
};

const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
`;

function BookUpdate() {
  const [book, setBook] = useState<Book>({} as Book);
  const [error, setError] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const { dispatch } = useContext(StoreContext);

  const history = useHistory();
  const { id } = useParams<BookParams>();

  useEffect(() => {
    const bookUrl = `${baseUrl}/books/${id}`;
    httpGet(bookUrl, setIsFetching)
      .then((data) => setBook(data))
      .catch((err) => setError(err.message));
  }, []);

  const handleUpdate = (bookToUpdate: Book) => {
    setError('');
    const url = `${baseUrl}/books/${book.id}`;
    const actionCreatorUpdate = (updatedBook: Book) => (
      { type: 'UPDATE_BOOK', payload: updatedBook }
    );

    httpPut(url, bookToUpdate, setIsCreating)
      .then((author) => {
        dispatch(actionCreatorUpdate(author));
        history.push('/books');
      })
      .catch((err) => setError(err.message));
  };

  return (
    <Container>
      <Nav>
        <Button variant="outline-secondary" href="/books">Back</Button>
      </Nav>
      <h1>Update book</h1>
      {
        isFetching || (
          <BookForm saveBook={handleUpdate} bookToUpdate={book} error={error} setError={setError} isSaving={isCreating} />
        )
      }
    </Container>
  );
}

export default BookUpdate;