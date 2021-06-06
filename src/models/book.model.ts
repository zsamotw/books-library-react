import Author from './author.model';
import Publisher from './publisher.model';

export default interface Book {
    title: string;
    isbn: string;
    publishmentYear: number | string;
    authorId: number | string;
    author?: Author;
    publisherId: number | string;
    publisher?: Publisher;
    id: number;
};
