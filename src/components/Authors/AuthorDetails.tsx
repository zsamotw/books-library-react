import React from 'react';
import { Card, Tab, Tabs } from 'react-bootstrap';
import Author from '../../models/author.model';
import AuthorUpdate from './AuthorUpdate';
import AuthorDelete from './AuthorDelete';

type AuthorDetailProps = {
  author: Author;
}

function AuthorDetails({ author }: AuthorDetailProps) {
  return (
    <>
      <Card className="p-3 mb-3">
        <Card.Body>
          <Tabs defaultActiveKey="details" id="uncontrolled-tab-example">
            <Tab eventKey="details" title="Details">
              <Card.Text className="mt-4">
                <div>{author.firstName}</div>
                <div>{author.lastName}</div>
                <AuthorDelete author={author} />
              </Card.Text>
            </Tab>
            <Tab eventKey="edit" title="Edit">
              <Card.Text className="mt-4">
                <AuthorUpdate author={author} />
              </Card.Text>
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </>
  );
}

export default AuthorDetails;
