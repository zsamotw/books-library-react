import React, { useContext, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import BookForm from './BookForm';
import Book from '../../models/book.model';
import { StoreContext } from '../Store';
import httpPost from '../../http-service/httpPost';
import baseUrl from '../../http-service/base-url';
import { actionCreators } from '../Store/action.creators';
import { Navigation } from '../shared/Navigation';

function BookCreate() {
  const { dispatch } = useContext(StoreContext);
  const [error, setError] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const history = useHistory();

  const handleCreate = (book: Book) => {
    setError('');

    const url = `${baseUrl}/books`;

    httpPost(url, book, setIsCreating)
      .then((author) => {
        dispatch(actionCreators.books.add(author));
        history.push('/books');
      })
      .catch((err) => setError(err.message));
  };

  return (
    <Container>
      <Navigation>
        <Button variant="outline-secondary" href="/books">Back</Button>
      </Navigation>
      <h1>Create Book</h1>
      <BookForm saveBook={handleCreate} bookToUpdate={null} error={error} setError={setError} isSaving={isCreating} />
    </Container>
  );
}

export default BookCreate;
