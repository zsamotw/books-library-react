import React, { FormEvent, useContext, useState } from 'react';
import {
  Alert, Button, Col, Form, Row, Spinner,
} from 'react-bootstrap';
import { StoreContext } from '../Store';
import httpPost from '../../http-service/httpPost';
import baseUrl from '../../http-service/base-url';
import { actionCreators } from '../Store/action.creators';

function AuthorCreate() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [validated, setValidated] = useState(false);

  const { dispatch } = useContext(StoreContext);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setError('');

    if (!event.currentTarget.checkValidity()) {
      setValidated(true);
      return;
    }

    const url = `${baseUrl}/authors`;
    const body = { firstName, lastName };

    httpPost(url, body, setIsCreating)
      .then((author) => dispatch(actionCreators.authors.add(author)))
      .catch((err) => setError(err.message))
      .finally(() => {
        setFirstName('');
        setLastName('');
        setValidated(false);
      });
  };

  return (
    <Row className="my-4">
      <Col>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row className="mb-3">
            <Col>
              <Form.Control
                placeholder="Type first name..."
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide first name.
              </Form.Control.Feedback>
            </Col>
            <Col>
              <Form.Control
                placeholder="Type last name..."
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide last name.
              </Form.Control.Feedback>
            </Col>
            <Col>
              <Button type="submit" variant="outline-success">

                {
              isCreating
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
                Create author
              </Button>
            </Col>
          </Form.Row>
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
      </Col>
    </Row>
  );
}

export default AuthorCreate;
