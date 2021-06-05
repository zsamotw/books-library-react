import React, { useContext, useState } from 'react';
import {
  Alert, Button, Modal, Spinner,
} from 'react-bootstrap';
import { StoreContext } from '../Store';
import baseUrl from '../../http-service/base-url';
import httpDelete from '../../http-service/httpDelete';
import Book from '../../models/book.model';
import { actionCreators } from '../Store/action.creators';

type BookDeleteProps = {
  book: Book
}

function BookDelete({ book }: BookDeleteProps) {
  const [error, setError] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const { dispatch } = useContext(StoreContext);

  function handleDelete() {
    setError('');

    const url = `${baseUrl}/books/${book.id}`;

    httpDelete(url, setIsDeleting)
      .then((data) => dispatch(actionCreators.books.delete(data)))
      .catch((err) => setError(err.message));

    setShowDeleteDialog(false);
  }

  return (
    <div>
      <Button
        className="ml-3"
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
            {` ${book.title}` }
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

export default BookDelete;
