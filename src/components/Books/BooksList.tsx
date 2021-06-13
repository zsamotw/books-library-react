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
import { actionCreators } from '../Store/action.creators';
import Author from '../../models/author.model';

function BooksList() {
  const { state, dispatch } = useContext(StoreContext);

  const [authors, isFetchingAuthors, authorsError] = useAuthors() as [{[key: string]: Author}, boolean, string];
  const [publishers, isFetchingPublishers, publishersError] = usePublishers();
  const [books, isFetchingBooks, booksError] = useBooks();

  useEffect(() => {
    const booksList = Object.values(books) as Book[];
    const fullDataBooks = booksList.map((book: Book) => {
      const publisher = publishers[String(book.publisherId)];
      const author = authors[book.authorId];
      return { ...book, author, publisher };
    });

    dispatch(actionCreators.books.addCollection(fullDataBooks));

    return () => dispatch(actionCreators.books.addCollection([]));
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
