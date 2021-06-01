import React, { useContext, useState } from 'react';
import {
  Alert, Button, Modal, Spinner,
} from 'react-bootstrap';
import httpDelete from '../../http-servis/httpDelete';
import Author from '../../models/author.model';
import { StoreContext } from '../Store';

type AuthorDeleteProps = {
  author: Author
}

function AuthorDelete({ author }: AuthorDeleteProps) {
  const [error, setError] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const { dispatch } = useContext(StoreContext);

  const url = `http://139.162.147.107:3523/authors/${author.id}`;
  const actionCreatorDelete = (authorToDelete: Author) => (
    { type: 'DELETE_AUTHOR', payload: authorToDelete }
  );

  function handleDelete() {
    setError('');
    httpDelete(url, setIsDeleting)
      .then((data) => dispatch(actionCreatorDelete(data)))
      .catch((err) => setError(err.message));

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
            {` ${author.firstName} ${author.lastName}` }
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

export default AuthorDelete;
