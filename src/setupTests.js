import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { submitAPI } from './api';

jest.mock('./api.js', () => ({
  submitAPI: jest.fn(),
}));

test('renders learn react link', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('submits the form', async () => {
  render(<App />);
  const nameInput = screen.getByLabelText('Name:');
  const emailInput = screen.getByLabelText('Email:');
  const dateInput = screen.getByLabelText('Date:');
  const submitButton = screen.getByText('Submit');

  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
  fireEvent.change(dateInput, { target: { value: '2024-02-14' } });

  fireEvent.click(submitButton);

  expect(submitAPI).toHaveBeenCalledWith({
    name: 'John Doe',
    email: 'john@example.com',
    date: '2024-02-14',
    time: '',
  });

});
