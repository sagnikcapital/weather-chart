import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, screen } from '@testing-library/react';
import About from '../src/pages/about/about';
import '@testing-library/jest-dom';

// Set up the server
const server = setupServer(
  rest.get('/api/react/test/about', (req, res, ctx) => {
    return res(ctx.json({ greeting: 'About Page testing' }));
  }),
);