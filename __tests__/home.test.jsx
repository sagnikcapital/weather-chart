import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, screen } from '@testing-library/react';
import Home from '../src/home/home';
import '@testing-library/jest-dom';

// Set up the server
const server = setupServer(
  rest.get('/api/react/test', (req, res, ctx) => {
    return res(ctx.json({ greeting: 'Home Page testing' }));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

/**Initiate */
test('loads and displays greeting', async () => {
  render(<Home url="/api/react/test" />);

  fireEvent.click(screen.getByText('Load Greeting'));

  await screen.findByRole('heading');

  expect(screen.getByRole('heading')).toHaveTextContent('Home Page testing');
  expect(screen.getByRole('button')).toBeDisabled();
});

/**Exception handle for Error */
test('handles server error', async () => {
  server.use(
    rest.get('/api/react/test', (req, res, ctx) => {
      return res(ctx.status(500));
    }),
  );

  // render(<Home url="/api/react/test" />);

  fireEvent.click(screen.getByText('Load Greeting'));

  await screen.findByRole('alert');

  expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!');
  expect(screen.getByRole('button')).not.toBeDisabled();
});