import React, { useContext, useEffect, useState } from 'react';
import {
  Alert, Col, Row, Spinner,
} from 'react-bootstrap';
import { StoreContext } from '../Store';
import AuthorDetails from './AuthorDetails';
import httpGet from '../../http-service/httpGet';
import Author from '../../models/author.model';
import baseUrl from '../../http-service/base-url';

export default function AuthorsList() {
  const { state, dispatch } = useContext(StoreContext);
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const url = `${baseUrl}/authors`;
    const actionCreator = (authors: Author[]) => (
      { type: 'ADD_AUTHORS', payload: authors }
    );

    httpGet(url, setIsFetching)
      .then((authors) => dispatch(actionCreator(authors)))
      .catch((err) => setError(err.message));

    return () => dispatch(actionCreator([]));
  }, [dispatch]);

  return (
    <Row>
      {
        isFetching
          ? <Spinner animation="grow" />
          : (
            <Col>
              {state.authors.map((author) => (
                <AuthorDetails author={author} key={author.id} />
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
