import React, { useContext, useEffect, useState } from 'react';
import {
  Alert, Col, Row, Spinner,
} from 'react-bootstrap';
import { StoreContext } from '../Store';
import httpGet from '../../http-service/httpGet';
import PublisherDetails from './PublishersDetails';
import baseUrl from '../../http-service/base-url';
import { actionCreators } from '../Store/action.creators';

export default function PublishersList() {
  const { state, dispatch } = useContext(StoreContext);
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const url = `${baseUrl}/publishers`;

    httpGet(url, setIsFetching)
      .then((publishers) => dispatch(actionCreators.publishers.addCollection(publishers)))
      .catch((err) => setError(err.message));

    return () => dispatch(actionCreators.publishers.addCollection([]));
  }, [dispatch]);

  return (
    <Row>
      {
        isFetching
          ? <Spinner animation="grow" />
          : (
            <Col>
              {state.publishers.map((publisher) => (
                <PublisherDetails publisher={publisher} key={publisher.id} />
              ))}
              {error
              && (
                <Alert variant="danger">{error}</Alert>
              )}
            </Col>
          )
      }
    </Row>
  );
}
