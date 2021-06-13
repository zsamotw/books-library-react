import { useEffect, useState } from 'react';
import httpGet from '../http-service/httpGet';
import baseUrl from '../http-service/base-url';
import Author from '../models/author.model';

const useAuthors = () => {
  const [authors, setAuthors] = useState({} as any);
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  const url = `${baseUrl}/authors`;

  useEffect(() => {
    httpGet(url, setIsFetching)
      .then((data: {[key: string]: Author}) => setAuthors(data))
      .catch((err) => setError(err.message));
  }, [url]);

  return [authors, isFetching, error];
};

export default useAuthors;
