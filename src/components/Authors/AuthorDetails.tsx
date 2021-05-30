import React, { useContext, useState } from 'react';
import {
  Alert,
  Button, Card, Form, Modal, Spinner, Tab, Tabs,
} from 'react-bootstrap';
import Author from '../../models/author.model';
import httpPut from '../../http-servis/httpPut';
import { StoreContext } from '../Store';
import httpDelete from '../../http-servis/httpDelete';

type AuthorDetailProps = {
  author: Author;
}

function AuthorDetails({ author: initialAuthor }: AuthorDetailProps) {
  const [author, setAuthor] = useState(initialAuthor);
  const { dispatch } = useContext(StoreContext);
  const { firstName, lastName, id } = author;

  const [updateError, setUpdateError] = useState('');
  const [deleteError, setDeleteError] = useState('');

  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const url = `http://139.162.147.107:3523/authors/${id}`;

  const actionCreatorUpdate = (a: Author) => (
    { type: 'UPDATE_AUTHOR', payload: a }
  );
  const actionCreatorDelete = (a: Author) => (
    { type: 'DELETE_AUTHOR', payload: a }
  );

  function handleSave() {
    const body = JSON.stringify({ firstName, lastName });
    httpPut(
      url, body, setIsUpdating, setUpdateError, dispatch, actionCreatorUpdate,
    );
  }

  function handleDelete() {
    httpDelete(
      url, setIsDeleting, setDeleteError, dispatch, actionCreatorDelete,
    );
    setShowDeleteDialog(false);
  }

  return (
    <>
      <Card className="p-2 mb-3">
        <Card.Body>
          <Tabs defaultActiveKey="details" id="uncontrolled-tab-example">
            <Tab eventKey="details" title="Details" tabClassName="mb-3">
              <Card.Text>
                {`${initialAuthor.firstName} ${initialAuthor.lastName}`}
              </Card.Text>
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
            </Tab>
            <Tab eventKey="edit" title="Edit" tabClassName="mb-3">
              <Form>
                <Form.Group controlId="author-first-name">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    value={firstName}
                    onChange={
                      (event) => setAuthor({ ...author, firstName: event.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group controlId="author-last-name">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    value={lastName}
                    onChange={
                      (event) => setAuthor({ ...author, lastName: event.target.value })
                    }
                  />
                </Form.Group>

                <Button variant="primary" onClick={handleSave}>
                  {
                  isUpdating
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
                  Save
                </Button>
                {updateError
              && (
                <Alert
                  variant="danger"
                  onClick={() => setUpdateError('')}
                  dismissible
                >
                  {updateError}
                </Alert>
              )}
              </Form>
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
      <Modal show={showDeleteDialog} onHide={() => setShowDeleteDialog(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            Are you sure delete
            {` ${initialAuthor.firstName} ${initialAuthor.lastName}` }
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
    </>
  );
}

export default AuthorDetails;
