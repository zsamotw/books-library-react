import React from 'react';
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { StoreContext } from '../../Store';
import baseUrl from '../../../http-service/base-url';
import AuthorUpdate from '../AuthorUpdate';
import Author from '../../../models/author.model';

const server = setupServer();
const dispatch = jest.fn();

function renderAuthorUpdate() {
  render(
    <StoreContext.Provider value={{ state: {} as any, dispatch }}>
      <AuthorUpdate author={{ firstName: 'first name', lastName: 'last name ' } as Author} />
    </StoreContext.Provider>,
  );
}

function actOnAuthorUpdate() {
  renderAuthorUpdate();

  const firstNameInput = screen.getByPlaceholderText(/Type first name/);
  const lastNameInput = screen.getByPlaceholderText(/Type last name/);

  fireEvent.change(firstNameInput, { target: { value: 'first name' } });
  fireEvent.change(lastNameInput, { target: { value: 'last name' } });

  const button = screen.getByRole('button');
  fireEvent.click(button);
  return screen.getByRole;
}

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('should display validation errors', () => {
  renderAuthorUpdate();

  const firstNameInput = screen.getByPlaceholderText(/Type first name/);
  const lastNameInput = screen.getByPlaceholderText(/Type last name/);
  fireEvent.change(firstNameInput, { target: { value: '' } });
  fireEvent.change(lastNameInput, { target: { value: '' } });

  const button = screen.getByRole('button');
  fireEvent.click(button);

  const firstNameError = screen.getByText(/Please provide first name./);
  const lastNameError = screen.getByText(/Please provide last name./);

  expect(lastNameError).toBeInTheDocument();
  expect(firstNameError).toBeInTheDocument();
});

it('should update author with valid data', async () => {
  server.use(
    rest.put(`${baseUrl}/authors/:id`, (
      req,
      res,
      ctx,
    ) => res(ctx.status(200), ctx.json({ firstName: 'name', lastName: 'last name' }))),
  );

  actOnAuthorUpdate();

  await waitFor(() => {
    expect(dispatch).toBeCalledTimes(1);
  });
});

it('should display alert when error occurred', async () => {
  server.use(
    rest.put(`${baseUrl}/authors/:id`, (
      req,
      res,
      ctx,
    ) => res(ctx.status(400), ctx.json({ message: 'error' }))),
  );

  actOnAuthorUpdate();

  await waitFor(() => {
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
  });
});
