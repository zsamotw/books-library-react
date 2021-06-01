import React, { useContext, useEffect, useState } from 'react';
import {
  Alert, Col, Row, Spinner,
} from 'react-bootstrap';
import { StoreContext } from '../Store';
import httpGet from '../../http-servis/httpGet';
import Publisher from '../../models/publisher.model';
import PublisherDetails from './PublishersDetails';

export default function PublishersList() {
  const { state, dispatch } = useContext(StoreContext);
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  const url = 'http://139.162.147.107:3523/publishers';
  const actionCreator = (publishers: Publisher[]) => (
    { type: 'ADD_PUBLISHERS', payload: publishers }
  );

  useEffect(() => {
    httpGet(url, setIsFetching, setError)
      .then((publishers) => dispatch(actionCreator(publishers)));
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
              ?? (
                <Alert variant="danger">{error}</Alert>
              )}
            </Col>
          )
      }
    </Row>
  );
}
