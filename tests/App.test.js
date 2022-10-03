import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../src/test-utils';
// import App from './App';
import Auth from '../src/shared/pages/Auth';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn chakra/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('returns a user not found error', () => {
    const email = 'notFound@email.com';
    const password = '123456';
    render(<Auth />)
    expect(signInHandler(email, password))
})