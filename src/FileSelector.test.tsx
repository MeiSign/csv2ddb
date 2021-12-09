import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import FileSelector from './FileSelector';

test('call onChange callback after csv file was selected', () => {
  const file = new File([""], "chucknorris.csv", { type: "text/csv" });
  const mockChangeCallback = jest.fn();

  render(<FileSelector onChange={mockChangeCallback} />);
  const fileInput = screen.getByTestId('file-input')

  fireEvent.change(fileInput, {
    target: { files: [file] },
  })

  expect(mockChangeCallback).toHaveBeenCalled();
  expect(mockChangeCallback.mock.calls[0][0]).toBe(file);
});
