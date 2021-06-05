import React, { useContext, useState } from 'react';
import {
  Alert, Button, Col, Form, Row, Spinner,
} from 'react-bootstrap';
import { StoreContext } from '../Store';
import httpPost from '../../http-service/httpPost';
import baseUrl from '../../http-service/base-url';
import { actionCreators } from '../Store/action.creators';

function PublisherCreate() {
  const { dispatch } = useContext(StoreContext);

  const [name, setName] = useState('');
  const [establishmentYear, setEstablishmentYear] = useState<number | string>('');
  const [error, setError] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  const yearOptions = [...Array(2022).keys()].reverse();

  const handleCreate = () => {
    setError('');

    const url = `${baseUrl}/publishers`;
    const body = { name, establishmentYear };

    httpPost(url, body, setIsCreating)
      .then((publisher) => dispatch(actionCreators.publishers.add(publisher)))
      .catch((err) => setError(err.message));

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
                as="select"
                value={establishmentYear}
                onChange={(event) => setEstablishmentYear(Number(event.target.value))}
              >
                <option value="">Select establishmentYear year...</option>
                {yearOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </Form.Control>
            </Col>
            <Col>
              <Button variant="outline-success" onClick={handleCreate}>

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
                Create publisher
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
