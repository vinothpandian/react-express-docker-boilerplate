import React from 'react'
import { render, screen } from '@testing-library/react'
import { HelloWorld } from '../components/helloWorld'
it('renders the greeting, message and existing class', () => {
  const { container } = render(<HelloWorld exampleMessage="Preserved message" />)
  expect(container.firstChild).toHaveClass('hello-world')
  expect(screen.getByText('Hello world!')).toBeInTheDocument()
  expect(screen.getByText('Preserved message')).toBeInTheDocument()
})
