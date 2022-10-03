import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '../src/test-utils';
// import App from './App';
import Auth from '../src/shared/pages/Auth';

test('returns a user not found error', () => {
    const email = 'notFound@email.com';
    const password = '123456';
    render(<Auth />)
    expect(signInHandler(email, password))
})