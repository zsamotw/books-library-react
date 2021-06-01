import React, { useContext, useState } from 'react';
import {
  Alert, Button, Modal, Spinner,
} from 'react-bootstrap';
import httpDelete from '../../http-servis/httpDelete';
import { StoreContext } from '../Store';
import Publisher from '../../models/publisher.model';

type PublisherDeleteProps = {
  publisher: Publisher
}

function PublisherDelete({ publisher }: PublisherDeleteProps) {
  const [deleteError, setDeleteError] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const { dispatch } = useContext(StoreContext);

  const url = `http://139.162.147.107:3523/publishers/${publisher.id}`;
  const actionCreatorDelete = (publisherToDelete: Publisher) => (
    { type: 'DELETE_PUBLISHER', payload: publisherToDelete }
  );

  function handleDelete() {
    setDeleteError('');
    httpDelete(url, setIsDeleting, setDeleteError)
      .then((data) => dispatch(actionCreatorDelete(data)));
    setShowDeleteDialog(false);
  }

  return (
    <div className="mt-4">
      <Button
        className="mb-3"
        onClick={() => setShowDeleteDialog(true)}
      >
        delete
      </Button>
      {deleteError && (
        <Alert
          variant="danger"
          onClick={() => setDeleteError('')}
          dismissible
        >
          {deleteError}
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
