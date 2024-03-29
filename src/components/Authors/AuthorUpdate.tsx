import React, { FormEvent, useContext, useState } from 'react';
import {
  Alert, Button, Form, Spinner,
} from 'react-bootstrap';
import Author from '../../models/author.model';
import httpPut from '../../http-service/httpPut';
import { StoreContext } from '../Store';
import baseUrl from '../../http-service/base-url';
import { actionCreators } from '../Store/action.creators';

type AuthorUpdateProps = {
  author: Author
}

function AuthorUpdate({ author }: AuthorUpdateProps) {
  const [firstName, setFirstName] = useState(author.firstName);
  const [lastName, setLastName] = useState(author.lastName);
  const [error, setError] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [validated, setValidated] = useState(false);

  const { dispatch } = useContext(StoreContext);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();
    setError('');

    if (!event.currentTarget.checkValidity()) {
      setValidated(true);
      return;
    }

    const url = `${baseUrl}/authors/${author.id}`;
    const body = { firstName, lastName };

    httpPut(url, body, setIsUpdating)
      .then((data) => dispatch(actionCreators.authors.update(data)))
      .catch((err) => setError(err.message))
      .finally(() => setValidated(false));
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="author-first-name">
        <Form.Label>First name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Type first name..."
          value={firstName}
          onChange={
              (event) => setFirstName(event.target.value)
            }
          required
        />
        <Form.Control.Feedback type="invalid">
          Please provide first name.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="author-last-name">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Type last name..."
          value={lastName}
          onChange={
              (event) => setLastName(event.target.value)
            }
          required
        />
        <Form.Control.Feedback type="invalid">
          Please provide last name.
        </Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" variant="primary">
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
  );
}

export default AuthorUpdate;
