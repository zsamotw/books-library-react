import { useEffect, useState } from 'react';
import httpGet from '../http-servis/httpGet';
import baseUrl from '../http-servis/base-url';

const useBooks = () => {
  const [books, setBooks] = useState({});
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  const url = `${baseUrl}/books`;

  useEffect(() => {
    httpGet(url, setIsFetching)
      .then((data) => setBooks(data))
      .catch((err) => setError(err.message));
  }, [url]);

  return [books, error, isFetching];
};

export default useBooks;
