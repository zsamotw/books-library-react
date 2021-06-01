import React from 'react';
import checkError from './check-error';

export default function httpDelete(
  url: string,
  setIsDeleting: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  // dispatch: any,
  // actionCreator: any,
) {
  setIsDeleting(true);

  return fetch(url, {
    method: 'DELETE',
  })
    .then(checkError)
    // .then((data) => dispatch(actionCreator(data)))
    .catch((err) => setError(err.message))
    .finally(() => setIsDeleting(false));
}
