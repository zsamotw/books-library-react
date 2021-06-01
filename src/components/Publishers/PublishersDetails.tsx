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
            <section className="mt-4">
              <div>{publisher.name}</div>
              <div>{publisher.establishmentYear}</div>
              <PublisherDelete publisher={publisher} />
            </section>
          </Tab>
          <Tab eventKey="edit" title="Edit">
            <section className="mt-4">
              <PublisherUpdate publisher={publisher} />
            </section>
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  );
}

export default PublisherDetails;
