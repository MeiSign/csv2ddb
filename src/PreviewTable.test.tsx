import React from 'react';
import { render, screen } from '@testing-library/react';
import PreviewTable from './PreviewTable';

test('renders headline with default text if file name is undefined', () => {
    render(<PreviewTable/>);
  const fileSelector = screen.getByTestId('preview-table')
  expect(fileSelector).toHaveClass('Preview-table');
  expect(fileSelector).toHaveTextContent('No file selected')
});
  
test('renders headline with file name props', () => {
  render(<PreviewTable fileName="Test Props"/>);
const fileSelector = screen.getByTestId('preview-table')
expect(fileSelector).toHaveClass('Preview-table');
expect(fileSelector).toHaveTextContent('Test Props')
});