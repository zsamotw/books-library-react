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
        <Card.Title>{book.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{book.isbn}</Card.Subtitle>
        <Card.Text>{book.author?.firstName}</Card.Text>
        <Card.Text>{book.author?.lastName}</Card.Text>
        <Card.Text>{book.publisher?.name}</Card.Text>
        <Card.Text>{book.publishmentYear}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BookDetails;
