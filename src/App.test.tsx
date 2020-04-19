import React from 'react'
import { render } from '@testing-library/react'

import App from './App'

test('renders movie title', () => {
  const { getByText } = render(<App />)
  const title = getByText(/^WOOKIES MOVIES/)
  expect(title).toHaveTextContent('WOOKIES MOVIES')
})
