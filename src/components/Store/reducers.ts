import AppStore from '../../models/store.model';
import Author from '../../models/author.model';
import Publisher from '../../models/publisher.model';
import Book from '../../models/book.model';
import { actionTypes } from './action.types';

export function appReducers(state: AppStore, action: any): AppStore {
  switch (action.type) {
    case (actionTypes.authors.addCollection): {
      const authors = Object.values(action.payload) as Author[];
      return { ...state, authors };
    }
    case (actionTypes.authors.add):
      return {
        ...state,
        authors: [action.payload, ...state.authors],
      };
    case (actionTypes.authors.update):
      return {
        ...state,
        authors: state.authors.reduce((result: Author[], author) => {
          if (author.id === action.payload.id) {
            return [...result, action.payload];
          }
          return [...result, author];
        }, []),
      };
    case (actionTypes.authors.delete):
      return {
        ...state,
        authors: state
          .authors
          .filter((author) => author.id !== action.payload.id),
      };
    case (actionTypes.publishers.addCollection): {
      const publishers = Object.values(action.payload) as Publisher[];
      return { ...state, publishers };
    }
    case (actionTypes.publishers.add):
      return {
        ...state,
        publishers: [action.payload, ...state.publishers],
      };
    case (actionTypes.publishers.update):
      return {
        ...state,
        publishers: state
          .publishers
          .reduce((result: Publisher[], publisher) => {
            if (publisher.id === action.payload.id) {
              return [...result, action.payload];
            }
            return [...result, publisher];
          }, []),
      };
    case (actionTypes.publishers.delete):
      return {
        ...state,
        publishers: state
          .publishers
          .filter((publisher) => publisher.id !== action.payload.id),
      };
    case (actionTypes.books.addCollection): {
      const books = Object.values(action.payload) as Book[];
      return { ...state, books };
    }
    case (actionTypes.books.add):
      return {
        ...state,
        books: [action.payload, ...state.books],
      };
    case (actionTypes.books.update):
      return {
        ...state,
        books: state
          .books
          .reduce((result: Book[], book) => {
            if (book.id === action.payload.id) {
              return [...result, action.payload];
            }
            return [...result, book];
          }, []),
      };
    case (actionTypes.books.delete):
      return {
        ...state,
        books: state
          .books
          .filter((book) => book.id !== action.payload.id),
      };
    default:
      return state;
  }
}
