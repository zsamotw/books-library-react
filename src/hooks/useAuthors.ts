import { useEffect, useState } from 'react';
import httpGet from '../http-servis/httpGet';

const useAuthors = () => {
  const [authors, setAuthors] = useState({} as any);
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  const url = 'http://139.162.147.107:3523/authors';

  useEffect(() => {
    httpGet(url, setIsFetching)
      .then((data) => setAuthors(data))
      .catch((err) => setError(err.message));
  }, []);

  return [authors, isFetching, error];
};

export default useAuthors;
