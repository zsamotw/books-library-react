import React, { FormEvent, useContext, useState } from 'react';
import {
  Alert, Button, Form, Spinner,
} from 'react-bootstrap';
import httpPut from '../../http-service/httpPut';
import { StoreContext } from '../Store';
import Publisher from '../../models/publisher.model';
import baseUrl from '../../http-service/base-url';
import { actionCreators } from '../Store/action.creators';

type PublisherUpdateProps = {
  publisher: Publisher
}

function PublisherUpdate({ publisher }: PublisherUpdateProps) {
  const [name, setName] = useState(publisher.name);
  const [establishmentYear, setEstablishmentYear] = useState(publisher.establishmentYear);
  const [error, setError] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [validated, setValidated] = useState(false);

  const { dispatch } = useContext(StoreContext);

  const yearOptions = [...Array(new Date().getFullYear() + 1).keys()].reverse();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();
    setError('');

    if (!event.currentTarget.checkValidity()) {
      setValidated(true);
      return;
    }

    const url = `${baseUrl}/publishers/${publisher.id}`;
    const body = { name, establishmentYear };

    httpPut(url, body, setIsUpdating)
      .then((data) => dispatch(actionCreators.publishers.update(data)))
      .catch((err) => setError(err.message))
      .finally(() => setValidated(false));
  }

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="author-first-name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type first name..."
            value={name}
            onChange={
              (event) => setName(event.target.value)
            }
            required
          />
          <Form.Control.Feedback type="invalid">
            Please provide name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="establishment-year">
          <Form.Label>Establishment year</Form.Label>
          <Form.Control
            placeholder="Type establishment year..."
            as="select"
            value={establishmentYear}
            onChange={(event) => setEstablishmentYear(Number(event.target.value))}
            required
          >
            <option value="">Select establishmentYear year...</option>
            {yearOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please provide year.
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
    </div>
  );
}

export default PublisherUpdate;
