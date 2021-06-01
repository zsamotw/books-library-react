import { useEffect, useState } from 'react';
import httpGet from '../http-servis/httpGet';

const usePublishers = () => {
  const [publishers, setPublishers] = useState({} as any);
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  const url = 'http://139.162.147.107:3523/publishers';

  useEffect(() => {
    httpGet(url, setIsFetching)
      .then((data) => setPublishers(data))
      .catch((err) => setError(err.message));
  }, []);

  return [publishers, isFetching, error];
};

export default usePublishers;
