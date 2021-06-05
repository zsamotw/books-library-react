import Author from '../../models/author.model';
import { actionTypes } from './action.types';
import Publisher from '../../models/publisher.model';
import Book from '../../models/book.model';

export const actionCreators = {
  authors: {
    addCollection: (authors: Author[]) => (
      { type: actionTypes.authors.addCollection, payload: authors }
    ),
    add: (authorToAdd: Author) => (
      { type: actionTypes.authors.add, payload: authorToAdd }
    ),
    update: (authorToUpdate: Author) => (
      { type: actionTypes.authors.update, payload: authorToUpdate }
    ),
    delete: (authorToDelete: Author) => (
      { type: actionTypes.authors.delete, payload: authorToDelete }
    ),
  },
  publishers: {
    addCollection: (publishers: Publisher[]) => (
      { type: actionTypes.publishers.addCollection, payload: publishers }
    ),
    add: (publisherToAdd: Publisher) => (
      { type: actionTypes.publishers.add, payload: publisherToAdd }
    ),
    update: (publisherToUpdate: Publisher) => (
      { type: actionTypes.publishers.update, payload: publisherToUpdate }
    ),
    delete: (publisherToDelete: Publisher) => (
      { type: actionTypes.publishers.delete, payload: publisherToDelete }
    ),
  },
  books: {
    addCollection: (books: Book[]) => (
      { type: actionTypes.books.addCollection, payload: books }
    ),
    add: (bookToAdd: Book) => (
      { type: actionTypes.books.add, payload: bookToAdd }
    ),
    update: (bookToUpdate: Book) => (
      { type: actionTypes.books.update, payload: bookToUpdate }
    ),
    delete: (bookToDelete: Book) => (
      { type: actionTypes.books.delete, payload: bookToDelete }
    ),
  },
};
