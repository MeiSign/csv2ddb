import React from 'react';
import { render, screen } from '@testing-library/react';
import FileSelector from './FileSelector';

test('renders file selector div', () => {
  render(<FileSelector />);
  const fileSelector = screen.getByTestId('file-selector')
  expect(fileSelector).toHaveClass('File-selector');
  expect(fileSelector).toHaveTextContent('FileSelector will sit here')
});
