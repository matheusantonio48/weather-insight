import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../app/page';

describe('Home', () => {
  it('renders main content correctly', () => {
    const { getByText, getByAltText } = render(<Home />);

    expect(getByText('Get started by editing')).toBeInTheDocument();
    expect(getByAltText('Next.js Logo')).toBeInTheDocument();
  });
});
