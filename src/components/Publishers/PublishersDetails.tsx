import React from 'react';
import { Card, Tab, Tabs } from 'react-bootstrap';
import Publisher from '../../models/publisher.model';
import PublisherDelete from './PublishersDelete';
import PublisherUpdate from './PublishersUpdate';

type PublisherDetailProps = {
  publisher: Publisher;
}

function PublisherDetails({ publisher }: PublisherDetailProps) {
  return (
    <>
      <Card className="p-2 mb-3">
        <Card.Body>
          <Tabs defaultActiveKey="details" id="uncontrolled-tab-example">
            <Tab eventKey="details" title="Details" tabClassName="mb-3">
              <Card.Text>
                <div>{publisher.name}</div>
                <div>{publisher.establishmentYear}</div>
                <PublisherDelete publisher={publisher} />
              </Card.Text>
            </Tab>
            <Tab eventKey="edit" title="Edit" tabClassName="mb-3">
              <PublisherUpdate publisher={publisher} />
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </>
  );
}

export default PublisherDetails;
