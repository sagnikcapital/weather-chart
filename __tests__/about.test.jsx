import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, screen } from '@testing-library/react';
import About from '../src/pages/about/about';
import '@testing-library/jest-dom';
