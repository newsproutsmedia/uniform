import React, {Suspense} from 'react';
import { RecoilRoot } from 'recoil';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<RecoilRoot><Suspense fallback={<span>Loading...</span>}><App /></Suspense></RecoilRoot>);
  expect(screen.getByTestId('mainheading')).toHaveTextContent('Calculate your NPS® (Net Promoter Score)');
});
