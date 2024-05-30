import React from 'react'
import {http, HttpResponse} from 'msw'
import {setupServer} from 'msw/node'
import {render, fireEvent, screen} from '@testing-library/react'
import Home from '../src/home/home';
import '@testing-library/jest-dom'


const server = setupServer(
  http.get('/api/react/test', () => {
    return HttpResponse.json({greeting: 'Home Page testing'});s
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

/**Initiate */
test('loads and displays greeting', async () => {
  render(<Home url="/api/react/test" />)

  fireEvent.click(screen.getByText('Load Greeting'))

  await screen.findByRole('heading')

  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toBeDisabled()
});

/**Exception handle for Error */
test('handles server error', async () => {
  server.use(
    http.get('/greeting', () => {
      return new HttpResponse(null, {status: 500})
    }),
  )

  render(<Home url="/api/react/test" />)

  fireEvent.click(screen.getByText('Load Greeting'))

  await screen.findByRole('alert')

  expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
  expect(screen.getByRole('button')).not.toBeDisabled()
})