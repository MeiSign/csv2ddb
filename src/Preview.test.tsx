import React from 'react';
import { render, screen } from '@testing-library/react';
import Preview from './Preview';

test('renders headline with default text if file name is undefined', () => {
  render(<Preview csvLines={[["a","b","c"]]}/>);
  const preview = screen.getByTestId('preview-div')
  expect(preview).toHaveClass('Preview-table');
  expect(preview).toHaveTextContent('No file selected')
  expect(preview).not.toHaveTextContent('abc')
});

test('renders headline with file name of props', () => {
  const file = new File([""], "chucknorris.csv", { type: "text/csv" });
  render(<Preview file={file} csvLines={[["a","b","c"]]} />);
  const preview = screen.getByTestId('preview-div')
  expect(preview).toHaveClass('Preview-table');
  expect(preview).toHaveTextContent(file.name)
  expect(preview).toHaveTextContent('abc')
});