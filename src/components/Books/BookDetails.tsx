import React from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import Book from '../../models/book.model';
import BookDelete from './BookDelete';

type BookDetailsProps = {
  book: Book;
}

function BookDetails({ book }: BookDetailsProps) {
  return (
    <Card className="p-3 mb-3">
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '12px' }}>{book.isbn}</Card.Subtitle>
        <Card.Text>{`${book.author?.firstName} ${book.author?.lastName}`}</Card.Text>
        <Card.Text>
          <span>By </span>
          {book.publisher?.name}
          <span> in </span>
          {book.publishmentYear}
        </Card.Text>
        <ButtonGroup size="sm" className="mt-4">
          <Button variant="outline-primary" size="sm" href={`/books/edit/${book.id}`}>Update</Button>
          <BookDelete book={book} />
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}

export default BookDetails;
