import React from 'react';
import checkError from './check-error';

export default function httpPut(
  url: string,
  body: any,
  setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>,
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
    .finally(() => setIsUpdating(false));
}
