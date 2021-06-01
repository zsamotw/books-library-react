import React from 'react';
import { Card } from 'react-bootstrap';
import Book from '../../models/book.model';

type BookDetailsProps = {
  book: Book;
}

function BookDetails({ book }: BookDetailsProps) {
  return (
    <Card className="p-3 mb-3">
      <Card.Body>
        {book.title}
      </Card.Body>
    </Card>
  );
}

export default BookDetails;
