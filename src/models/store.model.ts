import Author from './author.model';
import Book from './book.model';

export default interface AppStore {
    authors: Author[];
    books: Book[];
};
