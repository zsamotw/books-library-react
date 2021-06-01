import React, { useContext, useState } from 'react';
import {
  Alert, Button, Col, Form, Row, Spinner,
} from 'react-bootstrap';
import { StoreContext } from '../Store';
import Author from '../../models/author.model';
import httpPost from '../../http-servis/httpPost';

function AuthorCreate() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const { dispatch } = useContext(StoreContext);
  const [error, setError] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const url = 'http://139.162.147.107:3523/authors';
  const actionCreatorAdd = (authorToAdd: Author) => (
    { type: 'ADD_AUTHOR', payload: authorToAdd }
  );

  const handleCreate = () => {
    setError('');
    const body = JSON.stringify({ firstName, lastName });
    httpPost(url, body, setIsCreating)
      .then((author) => dispatch(actionCreatorAdd(author)))
      .catch((err) => setError(err.message));
    setFirstName('');
    setLastName('');
  };

  return (
    <Row className="my-4">
      <Col>
        <Form>
          <Form.Row className="mb-3">
            <Col>
              <Form.Control
                placeholder="Type first name..."
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Type last name..."
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </Col>
            <Col>
              <Button onClick={handleCreate}>

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
                Create Author
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
