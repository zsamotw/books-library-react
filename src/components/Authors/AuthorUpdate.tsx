import React, { useContext, useState } from 'react';
import {
  Alert, Button, Form, Spinner,
} from 'react-bootstrap';
import Author from '../../models/author.model';
import httpPut from '../../http-servis/httpPut';
import { StoreContext } from '../Store';
import baseUrl from '../../http-servis/base-url';

type AuthorUpdateProps = {
  author: Author
}

function AuthorUpdate({ author }: AuthorUpdateProps) {
  const [firstName, setFirstName] = useState(author.firstName);
  const [lastName, setLastName] = useState(author.lastName);
  const [error, setError] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  const { dispatch } = useContext(StoreContext);

  const url = `${baseUrl}/authors/${author.id}`;
  const actionCreatorUpdate = (authorToUpdate: Author) => (
    { type: 'UPDATE_AUTHOR', payload: authorToUpdate }
  );

  function handleSave() {
    setError('');
    const body = { firstName, lastName };
    httpPut(url, body, setIsUpdating)
      .then((data) => dispatch(actionCreatorUpdate(data)))
      .catch((err) => setError(err.message));
  }

  return (
    <div>

      <Form>
        <Form.Group controlId="author-first-name">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type first name..."
            value={firstName}
            onChange={
              (event) => setFirstName(event.target.value)
            }
          />
        </Form.Group>

        <Form.Group controlId="author-last-name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type last name..."
            value={lastName}
            onChange={
              (event) => setLastName(event.target.value)
            }
          />
        </Form.Group>

        <Button variant="primary" onClick={handleSave}>
          {
            isUpdating
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
          Save
        </Button>
        {error
        && (
          <Alert
            variant="danger"
            onClick={() => setError('')}
            dismissible
          >
            {error}
          </Alert>
        )}
      </Form>
    </div>
  );
}

export default AuthorUpdate;
