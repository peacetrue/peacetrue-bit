import React from 'react';
import { render } from '@testing-library/react';
import { BasicReactApp } from './react-app.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicReactApp />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
