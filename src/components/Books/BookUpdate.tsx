import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Button, Container } from 'react-bootstrap';
import { StoreContext } from '../Store';
import baseUrl from '../../http-service/base-url';
import Book from '../../models/book.model';
import BookForm from './BookForm';
import httpGet from '../../http-service/httpGet';
import httpPut from '../../http-service/httpPut';
import { actionCreators } from '../Store/action.creators';
import { Navigation } from '../shared/Navigation';

type BookProps = {
  id: string
};

function BookUpdate() {
  const [book, setBook] = useState<Book>({} as Book);
  const [error, setError] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const { dispatch } = useContext(StoreContext);

  const history = useHistory();
  const { id } = useParams<BookProps>();

  useEffect(() => {
    const bookUrl = `${baseUrl}/books/${id}`;
    httpGet(bookUrl, setIsFetching)
      .then((data) => setBook(data))
      .catch((err) => setError(err.message));
  }, [id]);

  const handleUpdate = (bookToUpdate: Book) => {
    setError('');
    const url = `${baseUrl}/books/${book.id}`;

    httpPut(url, bookToUpdate, setIsCreating)
      .then((author) => {
        dispatch(actionCreators.books.update(author));
        history.push('/books');
      })
      .catch((err) => setError(err.message));
  };

  return (
    <Container>
      <Navigation>
        <Button variant="outline-secondary" href="/books">Back</Button>
      </Navigation>
      <h1>Update book</h1>
      {
        isFetching || (
          <BookForm
            saveBook={handleUpdate}
            bookToUpdate={book}
            error={error}
            setError={setError}
            isSaving={isCreating}
          />
        )
      }
    </Container>
  );
}

export default BookUpdate;
