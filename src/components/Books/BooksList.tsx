import React, { useContext, useEffect } from 'react';
import {
  Alert, Col, Row, Spinner,
} from 'react-bootstrap';
import { StoreContext } from '../Store';
import Book from '../../models/book.model';
import BookDetails from './BookDetails';
import useAuthors from '../../hooks/useAuthors';
import usePublishers from '../../hooks/usePublishers';
import useBooks from '../../hooks/useBooks';

function BooksList() {
  const { state, dispatch } = useContext(StoreContext);
  const actionCreator = (books: Book[]) => (
    { type: 'ADD_BOOKS', payload: books }
  );

  const [authors, isFetchingAuthors, authorsError] = useAuthors();
  const [publishers, isFetchingPublishers, publishersError] = usePublishers();
  const [books, isFetchingBooks, booksError] = useBooks();

  useEffect(() => {
    const booksList = Object.values(books) as Book[];
    const fullDataBooks = booksList.map((book: Book) => {
      const publisher = publishers[String(book.publisherId)];
      const author = authors[book.authorId];
      return { ...book, author, publisher };
    });

    dispatch(actionCreator(fullDataBooks));

    return () => dispatch(actionCreator([]));
  }, [dispatch, books, publishers, authors]);

  return (
    <Row>
      {
        isFetchingBooks || isFetchingAuthors || isFetchingPublishers
          ? <Spinner animation="grow" />
          : (
            <Col>
              {state.books.map((book) => (
                <BookDetails book={book} key={book.id} />
              ))}
              {(booksError || authorsError || publishersError)
              && (
                <Alert variant="danger">
                  {booksError}
                  {authorsError}
                  {publishersError}
                </Alert>
              )}
            </Col>
          )
      }
    </Row>
  );
}

export default BooksList;