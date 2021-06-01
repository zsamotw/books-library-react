import React, { useContext, useEffect, useState } from 'react';
import {
  Alert, Col, Row, Spinner,
} from 'react-bootstrap';
import { StoreContext } from '../Store';
import AuthorDetails from './AuthorDetails';
import httpGet from '../../http-servis/httpGet';
import Author from '../../models/author.model';

export default function AuthorsList() {
  const { state, dispatch } = useContext(StoreContext);
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  const url = 'http://139.162.147.107:3523/authors';
  const actionCreator = (authors: Author[]) => (
    { type: 'ADD_AUTHORS', payload: authors }
  );

  useEffect(() => {
    httpGet(url, setIsFetching, setError)
      .then((authors) => dispatch(actionCreator(authors)));

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
