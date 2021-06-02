import { useEffect, useState } from 'react';
import httpGet from '../http-servis/httpGet';
import baseUrl from '../http-servis/base-url';

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
