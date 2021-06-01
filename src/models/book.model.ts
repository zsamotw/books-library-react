import Author from './author.model';
import Publisher from './publisher.model';

export default interface Book {
    title: string;
    isbn: string;
    publishmentYear: number
    authorId: number;
    author?: Author;
    publisherId: number;
    publisher?: Publisher;
    id: number;
};
