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
    <Card className="p-3 mb-3">
      <Card.Body>
        <Tabs defaultActiveKey="details" id="uncontrolled-tab-example">
          <Tab eventKey="details" title="Details">
            <Card.Text className="mt-4">
              <div>{publisher.name}</div>
              <div>{publisher.establishmentYear}</div>
              <PublisherDelete publisher={publisher} />
            </Card.Text>
          </Tab>
          <Tab eventKey="edit" title="Edit">
            <Card.Text className="mt-4">
              <PublisherUpdate publisher={publisher} />
            </Card.Text>
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  );
}

export default PublisherDetails;
