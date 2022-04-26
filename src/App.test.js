import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Just Tattoo', () => {
  render(<App />);
  const AppHeaderLogo = screen.getByAltText(/Just Tattoo/i);
  expect(AppHeaderLogo).toBeInTheDocument();
});
