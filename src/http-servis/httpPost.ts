import React from 'react';
import checkError from './check-error';

export default function httpPost(
  url: string,
  body: any,
  setIsCreating: React.Dispatch<React.SetStateAction<boolean>>,
) {
  setIsCreating(true);
  return fetch(url, {
    method: 'POST',
    body,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(checkError)
    .finally(() => setIsCreating(false));
}
