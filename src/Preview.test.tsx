import React from 'react';
import { render, screen } from '@testing-library/react';
import Preview from './Preview';

test('renders headline with default text if file name is undefined', () => {
    render(<Preview/>);
  const preview = screen.getByTestId('preview-table')
  expect(preview).toHaveClass('Preview-table');
  expect(preview).toHaveTextContent('No file selected')
});
  
test('renders headline with file name of props', () => {
  const file = new File([""], "chucknorris.csv", { type: "text/csv" });
  render(<Preview file={file}/>);
const preview = screen.getByTestId('preview-table')
expect(preview).toHaveClass('Preview-table');
expect(preview).toHaveTextContent(file.name)
});