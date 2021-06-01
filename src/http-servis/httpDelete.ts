import React from 'react';
import checkError from './check-error';

export default function httpDelete(
  url: string,
  setIsDeleting: React.Dispatch<React.SetStateAction<boolean>>,
) {
  setIsDeleting(true);

  return fetch(url, {
    method: 'DELETE',
  })
    .then(checkError)
    .finally(() => setIsDeleting(false));
}
