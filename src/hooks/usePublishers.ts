import { useEffect, useState } from 'react';
import httpGet from '../http-service/httpGet';
import baseUrl from '../http-service/base-url';

const usePublishers = () => {
  const [publishers, setPublishers] = useState({} as any);
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  const url = `${baseUrl}/publishers`;

  useEffect(() => {
    httpGet(url, setIsFetching)
      .then((data) => setPublishers(data))
      .catch((err) => setError(err.message));
  }, [url]);

  return [publishers, isFetching, error];
};

export default usePublishers;
