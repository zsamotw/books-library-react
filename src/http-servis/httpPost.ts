import React from 'react';
import checkError from './check-error';

export default function httpPost(
  url: string,
  body: any,
  setIsCreating: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  // dispatch: any,
  // actionCreator: any,
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
    // .then((data) => dispatch(actionCreator(data)))
    .catch((err) => setError(err.message))
    .finally(() => setIsCreating(false));
}
