import React from 'react';
import checkError from './check-error';

export default function httpGet(
  url: string,
  setIsFetching: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
) {
  setIsFetching(true);
  return fetch(url)
    .then(checkError)
    .catch((err) => setError(err.message))
    .finally(() => setIsFetching(false));
}
