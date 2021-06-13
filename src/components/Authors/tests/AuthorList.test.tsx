import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { StoreContext } from '../../Store';
import baseUrl from '../../../http-service/base-url';
import AuthorsList from '../AuthorsList';

const server = setupServer();
const dispatch = jest.fn();

function renderAuthorsList() {
  render(
    <StoreContext.Provider value={{ state: { authors: [] } as any, dispatch }}>
      <AuthorsList />
    </StoreContext.Provider>,
  );
}

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('should dispatch author\'s data', async () => {
  server.use(
    rest.get(`${baseUrl}/authors`, (
      req,
      res,
      ctx,
    ) => res(ctx.status(200), ctx.json({ 1: { firstName: 'first name', lastName: 'last name' } }))),
  );
  renderAuthorsList();

  await waitFor(() => {
    expect(dispatch).toBeCalledTimes(1);
  });
});

it('should display alert when error occurred', async () => {
  server.use(
    rest.get(`${baseUrl}/authors`, (
      req,
      res,
      ctx,
    ) => res(ctx.status(400), ctx.json({ message: 'Can not get authors' }))),
  );
  renderAuthorsList();

  await waitFor(() => {
    expect(screen.getByText('Can not get authors')).toBeInTheDocument();
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
  });
});
