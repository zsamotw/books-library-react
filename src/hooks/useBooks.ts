import { useEffect, useState } from 'react';
import httpGet from '../http-servis/httpGet';

const useBooks = () => {
  const [books, setBooks] = useState({});
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  const url = 'http://139.162.147.107:3523/books';

  useEffect(() => {
    httpGet(url, setIsFetching)
      .then((data) => setBooks(data))
      .catch((err) => setError(err.message));
  }, []);

  return [books, error, isFetching];
};

export default useBooks;
