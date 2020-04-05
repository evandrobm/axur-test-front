import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App Tests', () => {
  it('should render all post informations', () => {
    render(<App />)
    expect(screen.getByText('Mocky Blog')).toBeInTheDocument()
  })
})
