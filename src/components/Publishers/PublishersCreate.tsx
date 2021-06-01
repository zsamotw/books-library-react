import React, { useContext, useState } from 'react';
import {
  Alert, Button, Col, Form, Row, Spinner,
} from 'react-bootstrap';
import { StoreContext } from '../Store';
import Publisher from '../../models/publisher.model';
import httpPost from '../../http-servis/httpPost';

function PublisherCreate() {
  const [name, setName] = useState('');
  const [establishmentYear, setEstablishmentYear] = useState<number | string>('');
  const { dispatch } = useContext(StoreContext);
  const [error, setError] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const url = 'http://139.162.147.107:3523/publishers';
  const actionCreatorAdd = (publisherToToAdd: Publisher) => (
    { type: 'ADD_PUBLISHER', payload: publisherToToAdd }
  );

  const handleCreate = () => {
    setError('');
    const body = JSON.stringify({ name, establishmentYear });
    httpPost(url, body, setIsCreating, setError)
      .then((publisher) => dispatch(actionCreatorAdd(publisher)));
    setName('');
    setEstablishmentYear('');
  };

  return (
    <Row className="my-4">
      <Col>
        <Form>
          <Form.Row className="mb-3">
            <Col>
              <Form.Control
                placeholder="Type name..."
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Type establishment year..."
                type="number"
                value={establishmentYear}
                onChange={(event) => setEstablishmentYear(Number(event.target.value))}
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
                Create Publisher
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

export default PublisherCreate;