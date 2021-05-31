import Author from './author.model';
import Book from './book.model';
import Publisher from './publisher.model';

export default interface AppStore {
    authors: Author[];
    publishers: Publisher[];
    books: Book[];
};
