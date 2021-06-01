import React from 'react';
import checkError from './check-error';

export default function httpDelete(
  url: string,
  setIsDeleting: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
) {
  setIsDeleting(true);

  return fetch(url, {
    method: 'DELETE',
  })
    .then(checkError)
    .catch((err) => setError(err.message))
    .finally(() => setIsDeleting(false));
}
