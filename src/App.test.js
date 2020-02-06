import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Machines } from './Machines';
import { Machine } from './Machine';

test('renders /machines link', () => {
  const { getByText } = render(<App />);
  const homeElement = getByText(/home/i);
  const machineElement = getByText(/machines/i);
  expect(homeElement).toBeInTheDocument();
  expect(machineElement).toBeInTheDocument();
});

test('renders machines list', () => {
  render(<Machines machines={[{ id: 'id' }]} dispatch={() => { }} />)
  expect(screen.getByText(/name|ipaddress|health/i)).toBeInTheDocument()
})

test('renders machine view', () => {
  render(<Machine machine={{ id: 'id' }} match={{ params: { machineId: 'machineId' } }} dispatch={() => { }} />)
  expect(screen.getByText(/ipaddress|health/i)).toBeInTheDocument()
})
