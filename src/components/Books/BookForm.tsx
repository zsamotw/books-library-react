import React, { useEffect, useState } from 'react';
import {
  Alert, Button, Form, Spinner,
} from 'react-bootstrap';
import useAuthors from '../../hooks/useAuthors';
import Author from '../../models/author.model';
import usePublishers from '../../hooks/usePublishers';
import Publisher from '../../models/publisher.model';
import Book from '../../models/book.model';

type BookFormProps = {
  saveBook: any,
  bookToUpdate: Book | null,
  error: string,
  isSaving: boolean,
  setError: React.Dispatch<React.SetStateAction<string>>
}

function BookForm({
  saveBook, bookToUpdate, error, isSaving, setError,
}: BookFormProps) {
  const [authorOptions, setAuthorOptions] = useState<Author[]>([]);
  const [publisherOptions, setPublisherOptions] = useState<Publisher[]>([]);
  const [book, setBook] = useState<Book>({} as Book);
  const [authors, isFetchingAuthors] = useAuthors();
  const [publishers, isFetchingPublishers] = usePublishers();
  const yearOptions = [...Array(2022).keys()].reverse();

  useEffect(() => {
    if (bookToUpdate) {
      setBook(bookToUpdate);
    }
  }, [bookToUpdate]);

  useEffect(() => {
    const opts = Object.values(authors) as Author[];
    setAuthorOptions(opts);
  }, [authors]);

  useEffect(() => {
    const opts = Object.values(publishers) as Publisher[];
    setPublisherOptions(opts);
  }, [publishers]);

  function handleSaveBook() {
    saveBook(book);
  }

  return (
    <div>
      {
        isFetchingAuthors || isFetchingPublishers
          ? <Spinner animation="grow" />
          : (
            <Form>
              <Form.Group controlId="title">
                <Form.Label> Book title</Form.Label>
                <Form.Control type="text" placeholder="Type book title..." value={book.title} onChange={(event) => setBook({ ...book, title: event.target.value })} />
              </Form.Group>
              <Form.Group controlId="isbn">
                <Form.Label> Book isbn</Form.Label>
                <Form.Control type="text" placeholder="Type book isbn..." value={book.isbn} onChange={(event) => setBook({ ...book, isbn: event.target.value })} />
              </Form.Group>
              <Form.Group controlId="author">
                <Form.Label>Book author</Form.Label>
                <Form.Control as="select" value={book.authorId} onChange={(event) => setBook({ ...book, authorId: Number(event.target.value) })}>
                  {authorOptions.map((author: Author) => (
                    <option key={author.id} value={author.id}>{`${author.firstName} ${author.lastName}`}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="publisher">
                <Form.Label>Book publisher</Form.Label>
                <Form.Control as="select" value={book.publisherId} onChange={(event) => setBook({ ...book, publisherId: Number(event.target.value) })}>
                  {publisherOptions.map((publisher: Publisher) => (
                    <option key={publisher.id} value={publisher.id}>{publisher.name}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="establishment-year">
                <Form.Label>Publishing year</Form.Label>
                <Form.Control
                  placeholder="Type establishment year..."
                  as="select"
                  value={book.publishmentYear}
                  onChange={(event) => setBook({ ...book, publishmentYear: Number(event.target.value) })}
                >
                  {yearOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Button onClick={handleSaveBook}>

                {
                  isSaving
                  && (
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  )
                }
                Save book
              </Button>
              {error && (
                <Alert
                  variant="danger"
                  onClick={() => setError('')}
                  dismissible
                >
                  {error}
                </Alert>
              )}
            </Form>
          )
      }
    </div>
  );
}

export default BookForm;
