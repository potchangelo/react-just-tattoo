import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const AppHeaderLogo = screen.getByAltText(/Just Tattoo/i);
  expect(AppHeaderLogo).toBeInTheDocument();
});
