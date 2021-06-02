import React, { useContext, useState } from 'react';
import {
  Alert, Button, Modal, Spinner,
} from 'react-bootstrap';
import httpDelete from '../../http-service/httpDelete';
import { StoreContext } from '../Store';
import Publisher from '../../models/publisher.model';
import baseUrl from '../../http-service/base-url';

type PublisherDeleteProps = {
  publisher: Publisher
}

function PublisherDelete({ publisher }: PublisherDeleteProps) {
  const [error, setError] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const { dispatch } = useContext(StoreContext);

  function handleDelete() {
    setError('');

    const url = `${baseUrl}/publishers/${publisher.id}`;
    const actionCreatorDelete = (publisherToDelete: Publisher) => (
      { type: 'DELETE_PUBLISHER', payload: publisherToDelete }
    );

    httpDelete(url, setIsDeleting)
      .then((data) => dispatch(actionCreatorDelete(data)))
      .catch((err) => setError(err.message));
    setShowDeleteDialog(false);
  }

  return (
    <div className="mt-4">
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => setShowDeleteDialog(true)}
      >
        delete
      </Button>
      {error && (
        <Alert
          variant="danger"
          onClick={() => setError('')}
          dismissible
        >
          {error}
        </Alert>
      )}
      <Modal show={showDeleteDialog} onHide={() => setShowDeleteDialog(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            Are you sure delete
            {` ${publisher.name}`}
            ?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowDeleteDialog(false)}
          >
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Delete
            { isDeleting
            && <Spinner animation="grow" />}
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default PublisherDelete;
