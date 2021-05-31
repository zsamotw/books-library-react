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
      <Card className="p-2 mb-3">
        <Card.Body>
          <Tabs defaultActiveKey="details" id="uncontrolled-tab-example">
            <Tab eventKey="details" title="Details" tabClassName="mb-3">
              <Card.Text>
                {`${author.firstName} ${author.lastName}`}
                <AuthorDelete author={author} />
              </Card.Text>
            </Tab>
            <Tab eventKey="edit" title="Edit" tabClassName="mb-3">
              <AuthorUpdate author={author} />
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </>
  );
}

export default AuthorDetails;
