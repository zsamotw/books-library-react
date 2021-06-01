import React from 'react';
import checkError from './check-error';

export default function httpPut(
  url: string,
  body: any,
  setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
) {
  setIsUpdating(true);

  return fetch(url, {
    method: 'PUT',
    body,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(checkError)
    .catch((err) => setError(err.message))
    .finally(() => setIsUpdating(false));
}
