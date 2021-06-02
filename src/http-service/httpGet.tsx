import React from 'react';
import checkError from './check-error';

export default function httpGet(
  url: string,
  setIsFetching: React.Dispatch<React.SetStateAction<boolean>>,
) {
  setIsFetching(true);
  return fetch(url)
    .then(checkError)
    .finally(() => setIsFetching(false));
}
