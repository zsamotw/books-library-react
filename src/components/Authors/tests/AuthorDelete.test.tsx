import React from 'react';
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import AuthorDelete from '../AuthorDelete';
import { StoreContext } from '../../Store';
import baseUrl from '../../../http-service/base-url';
import Author from '../../../models/author.model';

const server = setupServer();
const dispatch = jest.fn();

function renderAuthorDelete() {
  render(
    <StoreContext.Provider value={{ state: {} as any, dispatch }}>
      <AuthorDelete author={{} as Author} />
    </StoreContext.Provider>,
  );
}

function actOnAuthorDelete() {
  renderAuthorDelete();

  const openModalButton = screen.getByText('delete');
  fireEvent.click(openModalButton);
  const confirmDeleteButton = screen.getByText('Delete');
  fireEvent.click(confirmDeleteButton);
}

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('should delete author', async () => {
  server.use(
    rest.delete(`${baseUrl}/authors/:id`, (
      req,
      res,
      ctx,
    ) => res(ctx.status(200), ctx.json({ id: 1 }))),
  );

  actOnAuthorDelete();

  await waitFor(() => {
    expect(dispatch).toBeCalledTimes(1);
  });
});

it('should not delete author due to error', async () => {
  server.use(
    rest.delete(`${baseUrl}/authors/:id`, (
      req,
      res,
      ctx,
    ) => res(ctx.status(400), ctx.json({ message: 'error' }))),
  );

  actOnAuthorDelete();

  await waitFor(() => {
    expect(dispatch).toBeCalledTimes(0);
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
  });
});
