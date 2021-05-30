import React from 'react';
import checkError from './check-error';

export default function httpPut(
  url: string,
  body: any,
  setIsUpdating: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  dispatch: any,
  actionCreator: any,
) {
  setIsUpdating(true);

  fetch(url, {
    method: 'PUT',
    body,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(checkError)
    .then((data) => dispatch(actionCreator(data)))
    .catch((err) => setError(err.message))
    .finally(() => setIsUpdating(false));
}
