async function checkErrors(response: any) {
  if (response.status >= 200 && response.status <= 299) {
    return response.json();
  }
  const res = await response.json();
  throw Error(res.message ?? 'Unexpected error');
}

export default checkErrors;
