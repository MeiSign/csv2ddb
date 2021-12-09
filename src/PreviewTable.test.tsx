import React from 'react';
import { render, screen } from '@testing-library/react';
import PreviewTable from './PreviewTable';

test('renders learn react link', () => {
    render(<PreviewTable />);
  const fileSelector = screen.getByTestId('preview-table')
  expect(fileSelector).toHaveClass('Preview-table');
  expect(fileSelector).toHaveTextContent('table')
  });
  