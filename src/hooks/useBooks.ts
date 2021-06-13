import { useEffect, useState } from 'react';
import httpGet from '../http-service/httpGet';
import baseUrl from '../http-service/base-url';
import Book from '../models/book.model';

const useBooks = () => {
  const [books, setBooks] = useState({});
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  const url = `${baseUrl}/books`;

  useEffect(() => {
    httpGet(url, setIsFetching)
      .then((data:{[key: number]: Book}) => setBooks(data))
      .catch((err) => setError(err.message));
  }, [url]);

  return [books, error, isFetching];
};

export default useBooks;
