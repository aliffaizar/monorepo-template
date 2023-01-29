/* eslint-disable no-console */
import { render, screen } from '@testing-library/react'

import App from './App'

it('should render Hello World', () => {
  render(<App />)
  expect(screen.getByText('Hello World')).toBeInTheDocument()
})
