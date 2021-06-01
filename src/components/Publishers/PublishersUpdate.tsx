import React, { useContext, useState } from 'react';
import {
  Alert, Button, Form, Spinner,
} from 'react-bootstrap';
import httpPut from '../../http-servis/httpPut';
import { StoreContext } from '../Store';
import Publisher from '../../models/publisher.model';

type PublisherUpdateProps = {
  publisher: Publisher
}

function PublisherUpdate({ publisher }: PublisherUpdateProps) {
  const [name, setName] = useState(publisher.name);
  const [establishmentYear, setEstablishmentYear] = useState(publisher.establishmentYear);
  const [error, setError] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  const { dispatch } = useContext(StoreContext);

  const yearOptions = [...Array(2022).keys()].reverse();
  const url = `http://139.162.147.107:3523/publishers/${publisher.id}`;
  const actionCreatorUpdate = (publisherToUpdate: Publisher) => (
    { type: 'UPDATE_PUBLISHER', payload: publisherToUpdate }
  );

  function handleSave() {
    setError('');
    const body = JSON.stringify({ name, establishmentYear });
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
            value={name}
            onChange={
              (event) => setName(event.target.value)
            }
          />
        </Form.Group>

        <Form.Group controlId="establishment-year">
          <Form.Label>Establishment year</Form.Label>
          <Form.Control
            placeholder="Type establishment year..."
            as="select"
            value={establishmentYear}
            onChange={(event) => setEstablishmentYear(Number(event.target.value))}
          >
            {yearOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </Form.Control>
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

export default PublisherUpdate;
