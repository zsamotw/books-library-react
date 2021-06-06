import React, { FormEvent, useContext, useState } from 'react';
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
  const [validated, setValidated] = useState(false);

  const yearOptions = [...Array(new Date().getFullYear() + 1).keys()].reverse();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setError('');

    if (!event.currentTarget.checkValidity()) {
      setValidated(true);
      return;
    }

    const url = `${baseUrl}/publishers`;
    const body = { name, establishmentYear };

    httpPost(url, body, setIsCreating)
      .then((publisher) => dispatch(actionCreators.publishers.add(publisher)))
      .catch((err) => setError(err.message))
      .finally(() => {
        setName('');
        setEstablishmentYear('');
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
                placeholder="Type name..."
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide name.
              </Form.Control.Feedback>
            </Col>
            <Col>
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
