import { render, cleanup } from '@testing-library/react';
import React from 'react';
import ContactForm from '../Contact-Form';

describe('test contact form', () => {
  const state = {
    name: 'name',
    email: 'test email',
    message: 'test message',
  };

  afterEach(() => {
    cleanup();
  });

  it('should check render', () => {
    const { getByTestId } = render(<ContactForm onChange={(event: any) => console.log(event)} state={state} />);
    const email = getByTestId('email');
    // expect(email).toBeInTheDocument()
    // expect(email).toHaveTextContent('test email')
  });
});
