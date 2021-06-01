import React, { useEffect, useState } from 'react';
import { Form, Spinner } from 'react-bootstrap';
import useAuthors from '../../hooks/useAuthors';
import Author from '../../models/author.model';

function BookForm() {
  const [authorOptions, setAuthorOptions] = useState<Author[]>([]);
  const [authors, isFetchingAuthors] = useAuthors();
  const yearOptions = [...Array(2022).keys()].reverse();

  useEffect(() => {
    const opts = Object.values(authors) as Author[];
    setAuthorOptions(opts);
  }, [authors]);

  return (
    <div>
      {
        isFetchingAuthors
          ? <Spinner animation="grow" />
          : (
            <Form>
              <Form.Group controlId="title">
                <Form.Label> Book title</Form.Label>
                <Form.Control type="text" placeholder="Type book title..." />
              </Form.Group>
              <Form.Group controlId="isbn">
                <Form.Label> Book isbn</Form.Label>
                <Form.Control type="text" placeholder="Type book isbn..." />
              </Form.Group>
              <Form.Group controlId="author">
                <Form.Label>Book Author</Form.Label>
                <Form.Control as="select">
                  {authorOptions.map((author: Author) => (
                    <option value={author.id}>{`${author.firstName} ${author.lastName}`}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="establishment-year">
                <Form.Label>Publishing year</Form.Label>
                <Form.Control
                  placeholder="Type establishment year..."
                  as="select"
                >
                  {yearOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form>
          )
      }
    </div>
  );
}

export default BookForm;
